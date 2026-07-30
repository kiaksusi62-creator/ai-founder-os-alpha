/**
 * Kernel package for AI Founder OS (Genesis Alpha)
 *
 * Core rule: No module may bypass the Kernel.
 */

export class Kernel {
  private initialized = false;

  initialize() {
    if (this.initialized) return;
    // initialize core services, registries, security, etc.
    this.initialized = true;
    console.log('Kernel initialized');
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

// Export a singleton kernel instance
export const kernel = new Kernel();
