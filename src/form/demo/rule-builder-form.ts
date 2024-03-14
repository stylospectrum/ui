import {CSSResultGroup, LitElement, css, html, nothing} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import {customElement, property, state} from 'lit/decorators.js';
import {ContextProvider, consume, createContext} from '@lit/context';
import {styleMap} from 'lit/directives/style-map.js';

import type Form from '..';
import type Popover from '../../popover';

import '../../select';
import '../../icon/data/add';
import '../../icon/data/less';
import '../../icon/data/navigation-down-arrow';
import '../../icon/data/navigation-right-arrow';

interface RuleBuilderFormContext {
  getForm: () => Form;
  forceRender: () => void;
}

const ruleBuilderFormContext =
  createContext<RuleBuilderFormContext>('rule-builder-form');

@customElement('rule-builder-form-row')
export class RuleBuilderFormRow extends LitElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  `;

  @consume({context: ruleBuilderFormContext, subscribe: true})
  private _consumer!: RuleBuilderFormContext;

  @property({type: String})
  name!: string;

  @property({type: Array})
  nameGroup!: string[];

  @property({type: Boolean})
  isGroup!: boolean;

  @property({type: Number})
  offset!: number;

  _popoverRef = createRef<Popover>();

  protected override render() {
    if (this.isGroup) {
      return html`<rule-builder-form-group
        .name=${[this.name, 'subExpr']}
        .nameGroup=${this.nameGroup}
      >
      </rule-builder-form-group>`;
    }

    return html`
      <div style="display:flex;gap:.5rem;">
        <stylospectrum-form-item
          style="margin-bottom:0"
          .name=${[this.name, 'field']}
        >
          <stylospectrum-select
            .options=${[
              {id: 'color', name: 'color'},
              {id: 'size', name: 'size'},
              {id: 'type', name: 'type'},
            ]}
          >
          </stylospectrum-select>
        </stylospectrum-form-item>

        <stylospectrum-form-item
          style="margin-bottom:0"
          .name=${[this.name, 'operator']}
        >
          <stylospectrum-select .options=${[{id: '==', name: '=='}]}>
          </stylospectrum-select>
        </stylospectrum-form-item>

        <stylospectrum-form-item
          style="margin-bottom:0"
          .name=${[this.name, 'value']}
        >
          <stylospectrum-input></stylospectrum-input>
        </stylospectrum-form-item>
      </div>

      <div
        style=${styleMap({
          display: 'flex',
          gap: '0.5rem',
          marginRight: this.offset * 0.5625 + 'rem',
        })}
      >
        <stylospectrum-button
          type="Tertiary"
          icon="add"
          @click=${(e: CustomEvent) => {
            this._popoverRef.value?.showAt(e.target as HTMLElement);
          }}
        >
        </stylospectrum-button>

        <stylospectrum-button
          type="Tertiary"
          icon="less"
          @click=${() => {
            this._consumer
              .getForm()
              .list[this.nameGroup.join('_')].delete(parseInt(this.name));
            this._consumer.forceRender();
          }}
        >
        </stylospectrum-button>

        <stylospectrum-popover
          ${ref(this._popoverRef)}
          placement="Bottom"
          hide-footer
        >
          <stylospectrum-list-item
            @click=${() => {
              this._consumer.getForm().list[this.nameGroup.join('_')].add();
              this._popoverRef.value?.hide();
            }}
          >
            Create new row
          </stylospectrum-list-item>

          <stylospectrum-list-item
            @click=${() => {
              this._consumer
                .getForm()
                .list[this.nameGroup.join('_')].add({isGroup: true});
              this._popoverRef.value?.hide();
              this._consumer.forceRender();
            }}
          >
            Create new group
          </stylospectrum-list-item>
        </stylospectrum-popover>
      </div>
    `;
  }
}

@customElement('rule-builder-form-group')
export class RuleBuilderFormGroup extends LitElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      gap: 1rem;
      border: 1px solid #a9b4be;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      width: 100%;
    }
  `;

  @consume({context: ruleBuilderFormContext, subscribe: true})
  private _consumer!: RuleBuilderFormContext;

  @property({type: Array})
  name!: string[];

  @property({type: Array})
  nameGroup: string[] = [];

  @state()
  private _collapsed = false;

  @state()
  private _deleted = false;

  @state()
  private _offset = 0;

  protected override willUpdate(): void {
    requestAnimationFrame(() => {
      const numberOfGroup = Math.max(
        ...Object.keys(this._consumer.getForm().list).map(
          (key) => key.split('_').filter((k) => k === 'subExpr').length
        )
      );
      const level = [...this.nameGroup, ...this.name].filter(
        (k) => k === 'subExpr'
      ).length;
      this._offset = numberOfGroup - level;
    });
  }

  protected override render() {
    if (this._deleted) {
      return nothing;
    }

    return html`<stylospectrum-button
        type="Tertiary"
        icon=${this._collapsed
          ? 'navigation-right-arrow'
          : 'navigation-down-arrow'}
        @click=${() => {
          this._collapsed = !this._collapsed;
        }}
      >
      </stylospectrum-button>

      <div style="display:flex;gap:.5rem;flex-direction:column;width:100%">
        <div style="display:flex;gap:.5rem;justify-content:space-between;">
          <stylospectrum-form-item
            style="margin-bottom:0"
            .name=${this.name.length > 1 ? [this.name[0], 'type'] : 'type'}
          >
            <stylospectrum-select
              .options=${[
                {id: 'and', name: 'and'},
                {id: 'or', name: 'or'},
              ]}
            >
            </stylospectrum-select>
          </stylospectrum-form-item>

          <stylospectrum-button
            style=${styleMap({
              marginRight: this._offset * 0.5625 + 'rem',
            })}
            type="Tertiary"
            icon="less"
            @click=${() => {
              this._consumer
                .getForm()
                .list[this.nameGroup.join('_')].delete(parseInt(this.name[0]));
              this._deleted = true;
              this._consumer.forceRender();
            }}
          >
          </stylospectrum-button>
        </div>

        <stylospectrum-form-list
          style=${styleMap({
            flexDirection: 'column',
            gap: '.5rem',
            display: this._collapsed ? 'none' : 'flex',
          })}
          .defaultValues=${['']}
          .name=${this.name}
          .renderChild=${(name: number, value: any) => {
            return html`<rule-builder-form-row
              .name=${name}
              .nameGroup=${[...this.nameGroup, ...this.name]}
              .offset=${this._offset}
              ?isGroup=${value?.isGroup || Array.isArray(value?.subExpr)}
            >
            </rule-builder-form-row>`;
          }}
        >
        </stylospectrum-form-list>
      </div>`;
  }
}

@customElement('rule-builder-form')
export class RuleBuilderForm extends LitElement {
  private _provider = new ContextProvider(this, {
    context: ruleBuilderFormContext,
  });
  private _form = createRef<Form>();

  @state()
  _forceRender: any;

  override connectedCallback(): void {
    super.connectedCallback();

    this._provider.setValue({
      getForm: () => this._form.value!,
      forceRender: () => {
        this._forceRender = {};
      },
    });
  }

  protected override render() {
    return html`<stylospectrum-form ${ref(this._form)}>
        <rule-builder-form-group style="width:auto" .name=${['subExpr']}>
        </rule-builder-form-group>
      </stylospectrum-form>

      <stylospectrum-button
        style="margin-top:1rem"
        @click=${async () =>
          console.log(await this._form.value?.validateFields())}
      >
        Submit
      </stylospectrum-button>

      <stylospectrum-button
        style="margin-top:1rem"
        @click=${async () => {
          this._form.value?.setFieldsValue({
            type: 'and',
            subExpr: [
              {
                field: 'color',
                operator: '==',
                value: 'blue',
              },
              {
                type: 'or',
                subExpr: [
                  {
                    field: 'type',
                    operator: '==',
                    value: 'jean',
                  },
                  {
                    field: 'size',
                    operator: '==',
                    value: 's',
                  },
                ],
              },
            ],
          });
          this._forceRender = {};
        }}
      >
        set fields
      </stylospectrum-button>`;
  }
}
