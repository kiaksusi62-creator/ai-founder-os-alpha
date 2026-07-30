export interface ModuleDNA {
  id: string;
  name: string;
  version: string;
  description?: string;

  author?: string;

  permissions: string[];

  dependencies: string[];

  capabilities: string[];

  events: string[];

  status:
    | "development"
    | "testing"
    | "stable"
    | "deprecated";
}
