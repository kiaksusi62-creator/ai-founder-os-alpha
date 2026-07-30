import { SystemRegistry } from "./registry";

export class LobigoKernel {

  registry: SystemRegistry;

  private version = "0.1.0";

  constructor() {
    this.registry = new SystemRegistry();
  }

  start() {

    this.registry.register(
      "kernel",
      this
    );

    console.log(
      "🧠 Lobigo Core gestartet"
    );

    return {
      status: "running",
      version: this.version,
      components:
        this.registry.list()
    };
  }
}
