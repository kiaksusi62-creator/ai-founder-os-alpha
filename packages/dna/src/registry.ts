import { ModuleDNA } from "./types";
import { DNAValidator } from "./validator";

export class DNAModuleRegistry {
  private modules: Map<string, ModuleDNA>;
  private validator: DNAValidator;

  constructor() {
    this.modules = new Map();
    this.validator = new DNAValidator();
  }

  register(dna: ModuleDNA) {
    const result = this.validator.validate(dna);
    if (!result.valid) {
      throw new Error(`Invalid DNA: ${result.errors.join('; ')}`);
    }

    this.modules.set(dna.id, dna);
  }

  get(id: string): ModuleDNA | undefined {
    return this.modules.get(id);
  }

  list(): ModuleDNA[] {
    return Array.from(this.modules.values());
  }

  has(id: string): boolean {
    return this.modules.has(id);
  }

  unregister(id: string): boolean {
    return this.modules.delete(id);
  }
}
