interface IconData {
  pathData: string;
}

const registry = new Map<string, IconData>();

export const registerIcon = (name: string, data: IconData) => {
  registry.set(name, data);
};

export const getIconData = (name: string) => registry.get(name);
