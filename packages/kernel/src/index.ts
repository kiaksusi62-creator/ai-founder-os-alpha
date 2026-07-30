export class LobigoKernel {
  private name = "Lobigo Core";
  private version = "0.1.0";

  start() {
    console.log(
      `${this.name} gestartet - Version ${this.version}`
    );

    return {
      status: "running",
      version: this.version
    };
  }
}
