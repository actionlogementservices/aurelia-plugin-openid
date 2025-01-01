import { PLATFORM } from 'aurelia-pal';

/**
 * Defines the Aurelia plugin entry point.
 * @module
 * @category internal
 */

/**
 * Configures the Aurelia plugin.
 * @param {ext.FrameworkConfiguration} config the aurelia framework configuration
 */
export function configure(config) {
  config.globalResources([PLATFORM.moduleName('./elements/hello-world')]);
}
