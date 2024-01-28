import ts from 'typescript';
import {isAlsoAttribute} from '@custom-elements-manifest/analyzer/src/features/framework-plugins/lit/utils.js';
import {decorator} from '@custom-elements-manifest/analyzer/src/utils/index.js';
import {createAttributeFromField} from '@custom-elements-manifest/analyzer/src/features/analyse-phase/creators/createAttribute.js';
import {
  extractMixinNodes,
  isMixin,
} from '@custom-elements-manifest/analyzer/src/utils/mixins.js';
import {handleName} from '@custom-elements-manifest/analyzer/src/features/analyse-phase/creators/createMixin.js';

function hasEventDecorator(node) {
  return node?.decorators?.some((decorator) => {
    return decorator?.expression?.expression?.getText() === 'event';
  });
}

function handleEventDecorator(classNode, moduleDoc, mixinName = null) {
  let className;
  if (!mixinName) {
    className = classNode?.name?.getText();
  } else {
    className = mixinName;
  }

  const currClass = moduleDoc?.declarations?.find(
    (declaration) => declaration.name === className
  );

  classNode?.members?.forEach((member) => {
    if (hasEventDecorator(member)) {
      const propertyDecorator = member.decorators.find(decorator('event')),
        propertyOptions = propertyDecorator?.expression?.arguments?.find(
          (arg) => ts.isObjectLiteralExpression(arg)
        );

      const eventName = propertyDecorator?.expression?.arguments
        ?.at(0)
        ?.properties?.at(0)?.initializer?.text;

      if (isAlsoAttribute(propertyOptions)) {
        const field = currClass.members.find(
          (classMember) => classMember.name === member.name.getText()
        );

        if (!field) {
          return;
        }

        field.kind = 'event';

        if (eventName) {
          field.name = eventName;
        }
        const attribute = createAttributeFromField(field);

        const existingAttribute = currClass?.events?.find(
          (attr) => attr.name === attribute.name
        );

        if (!existingAttribute) {
          currClass.events.push(attribute);
        } else {
          currClass.events = currClass?.events?.map((attr) =>
            attr.name === attribute.name ? {...attr, ...attribute} : attr
          );
        }
      }
    }
  });
}

function eventPlugin() {
  return {
    name: 'event-plugin',
    analyzePhase({ts, node, moduleDoc}) {
      switch (node.kind) {
        case ts.SyntaxKind.ClassDeclaration:
          handleEventDecorator(node, moduleDoc);
          break;
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.VariableStatement:
          if (isMixin(node)) {
            const {mixinFunction, mixinClass} = extractMixinNodes(node),
              {name} = handleName({}, mixinFunction);

            handleEventDecorator(mixinClass, moduleDoc, name);
          }
          break;
      }
    },
  };
}

function methodAndFieldPlugin(type) {
  return {
    name: 'method-plugin',
    packageLinkPhase({customElementsManifest}) {
      customElementsManifest.modules.forEach((mod) => {
        let elements = [];
        mod.declarations.forEach((declaration) => {
          declaration.members?.forEach((member) => {
            if (member && member.kind === type && !member.attribute) {
              elements.push(member);
            }
            if (type === 'field') {
              declaration.fields = elements;
            } else {
              declaration.methods = elements;
            }
          });
        });
      });
    },
  };
}

function noPrivateFieldsPlugin() {
  return {
    name: 'no-private-fields-plugin',
    packageLinkPhase({customElementsManifest}) {
      customElementsManifest.modules.forEach((mod) => {
        mod.declarations.forEach((declaration) => {
          declaration.attributes = declaration.attributes
            ?.filter((attr) => {
              if (!attr.fieldName) {
                return true;
              }

              const field = declaration.members?.find(
                (member) => member.name === attr.fieldName
              );

              return !field || field.privacy !== 'private';
            })
            .map((attr) => {
              attr.name = attr.fieldName;
              return attr;
            });

          declaration.events = declaration.events?.filter((event) => {
            return event.privacy !== 'private';
          });

          declaration.members = [];
        });
      });
    },
  };
}

function sortMembersPlugin() {
  return {
    name: 'sort-members-plugin',
    packageLinkPhase({customElementsManifest}) {
      customElementsManifest.modules.forEach((module) => {
        module.declarations.forEach((declaration) => {
          declaration.members?.sort((a, b) => {
            const nameA = a.name,
              nameB = b.name;

            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            } else {
              return 0;
            }
          });
        });
      });
    },
  };
}

export default {
  globs: ['src/**/*.ts'],
  exclude: [
    'src/**/{React,stories}.ts',
    'src/**/React/*.ts',
    'src/icon/data/*',
    'src/(utils|enums|types)/**/*.ts',
  ],
  outdir: '.storybook',
  litelement: true,
  plugins: [
    noPrivateFieldsPlugin(),
    eventPlugin(),
    methodAndFieldPlugin('method'),
    methodAndFieldPlugin('field'),
    sortMembersPlugin(),
  ],
};
