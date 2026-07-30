import { ModuleDNA } from "./types";

export class DNAValidator {

  validate(
    dna: ModuleDNA
  ) {

    const errors:string[] = [];

    if (!dna.id) {
      errors.push(
        "Module ID fehlt"
      );
    }

    if (!dna.version) {
      errors.push(
        "Version fehlt"
      );
    }

    if (!Array.isArray(dna.permissions)) {
      errors.push(
        "Permissions fehlen"
      );
    }

    if (!Array.isArray(dna.capabilities)) {
      errors.push(
        "Capabilities fehlen"
      );
    }

    return {
      valid:
        errors.length === 0,

      errors
    };
  }
}
