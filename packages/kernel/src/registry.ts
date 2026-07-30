export type Component = any;

export class SystemRegistry {
  private components: Map<string, Component>;

  constructor() {
    this.components = new Map();
  }

  register(name: string, component: Component) {
    this.components.set(name, component);
  }

  get(name: string): Component | undefined {
    return this.components.get(name);
  }

  list(): Array<{ name: string; instance: Component }> {
    return Array.from(this.components.entries()).map(([name, instance]) => ({ name, instance }));
  }

  has(name: string): boolean {
    return this.components.has(name);
  }
}
