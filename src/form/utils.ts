/* eslint-disable @typescript-eslint/ban-ts-comment */
type Path = (string | number | symbol)[];

function internalSet<Entity = any, Output = Entity, Value = any>(
  entity: Entity,
  paths: Path,
  value: Value,
  removeIfUndefined: boolean
): Output {
  if (!paths.length) {
    return value as unknown as Output;
  }

  const [path, ...restPath] = paths;

  let clone: Output;
  if (!entity && typeof path === 'number') {
    clone = [] as unknown as Output;
  } else if (Array.isArray(entity)) {
    clone = [...entity] as unknown as Output;
  } else {
    clone = {...entity} as unknown as Output;
  }

  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    // @ts-expect-error
    delete clone[path][restPath[0]];
  } else {
    // @ts-expect-error
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

export function getValue(
  path: (string | number | symbol)[] | readonly (string | number | symbol)[],
  entity: any
) {
  let current: any = entity;

  for (let i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

export function setValue<Entity = any, Output = Entity, Value = any>(
  entity: Entity,
  paths: Path,
  value: Value,
  removeIfUndefined: boolean = false
): Output {
  if (
    paths.length &&
    removeIfUndefined &&
    value === undefined &&
    !getValue(paths.slice(0, -1), entity)
  ) {
    return entity as unknown as Output;
  }

  return internalSet(entity, paths, value, removeIfUndefined);
}

export function cloneByNamePathList(
  store: Record<string, unknown>,
  namePathList: string[][]
): Record<string, unknown> {
  let newStore = {};
  namePathList.forEach((namePath) => {
    const value = getValue(namePath, store);
    newStore = setValue(newStore, namePath, value);
  });

  return newStore;
}
