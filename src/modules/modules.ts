import type {
  ActivateModuleRequest,
  DeactivateModuleRequest,
  GetModuleConfigurationParametersRequest,
  GetModuleConfigurationParametersResponse,
  GetModuleQueueRequest,
  GetModuleQueueResponse,
  UpdateModuleConfigurationRequest,
} from '../types';
import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Factory function to create module management methods
 */
export function createModulesModule(callApi: CallFunction) {
  return {
    /**
     * Activate a WHMCS module
     *
     * @param params - Parameters for activating module
     * @param params.moduleType - The module type to be activated
     * @param params.moduleName - The module name to be activated
     * @param params.parameters - An array of configuration parameters to set for the given module
     * @returns Promise resolving to success response
     *
     * @example
     * ```typescript
     * // Activate a payment gateway
     * await client.modules.activateModule({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal',
     *   parameters: {
     *     email: 'merchant@example.com',
     *     forcesubscriptions: true
     *   }
     * });
     *
     * // Activate a provisioning module
     * await client.modules.activateModule({
     *   moduleType: 'server',
     *   moduleName: 'cpanel'
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/activatemodule/
     */
    activateModule: (params: ActivateModuleRequest): Promise<WhmcsSuccessResponse> =>
      callApi<WhmcsSuccessResponse>('ActivateModule', params),

    /**
     * Deactivate a WHMCS module
     *
     * @param params - Parameters for deactivating module
     * @param params.moduleType - The module type to be deactivated
     * @param params.moduleName - The module name to be deactivated
     * @param params.newGateway - The Gateway to switch respective entities to when deactivating a Gateway Module
     * @returns Promise resolving to success response
     *
     * @example
     * ```typescript
     * // Deactivate a payment gateway
     * await client.modules.deactivateModule({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal'
     * });
     *
     * // Deactivate gateway and switch to another
     * await client.modules.deactivateModule({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal',
     *   newGateway: 'stripe'
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/deactivatemodule/
     */
    deactivateModule: (params: DeactivateModuleRequest): Promise<WhmcsSuccessResponse> =>
      callApi<WhmcsSuccessResponse>('DeactivateModule', params),

    /**
     * Get configuration parameters for a module
     *
     * @param params - Parameters for getting module configuration
     * @param params.moduleType - The module type to get parameters for
     * @param params.moduleName - The module name to get parameters for
     * @returns Promise resolving to module configuration parameters
     *
     * @example
     * ```typescript
     * // Get PayPal gateway configuration parameters
     * const config = await client.modules.getModuleConfigurationParameters({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal'
     * });
     *
     * console.log('Available parameters:', config.parameters);
     * // Use parameters for activation
     * await client.modules.activateModule({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal',
     *   parameters: {
     *     email: 'merchant@example.com'
     *   }
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/getmoduleconfigurationparameters/
     */
    getModuleConfigurationParameters: (
      params: GetModuleConfigurationParametersRequest,
    ): Promise<GetModuleConfigurationParametersResponse> =>
      callApi<GetModuleConfigurationParametersResponse>('GetModuleConfigurationParameters', params),

    /**
     * Get module queue for incomplete failed actions
     *
     * @param params - Optional parameters for filtering module queue
     * @param params.relatedId - The id of the service to load. Used in conjunction with serviceType
     * @param params.serviceType - The type of service to load ('domain', 'service', 'addon' or '')
     * @param params.moduleName - The module name to obtain the queue for in system format
     * @param params.moduleAction - The module action to obtain the queue for
     * @param params.since - The date/time since to obtain the items. Format Y-m-d Can include H:i:s
     * @returns Promise resolving to module queue data
     *
     * @example
     * ```typescript
     * // Get all queue items
     * const queue = await client.modules.getModuleQueue();
     *
     * // Get queue for specific service
     * const serviceQueue = await client.modules.getModuleQueue({
     *   relatedId: 1,
     *   serviceType: 'service'
     * });
     *
     * // Get queue for specific module
     * const moduleQueue = await client.modules.getModuleQueue({
     *   moduleName: 'cpanel',
     *   moduleAction: 'CreateAccount'
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/getmodulequeue/
     */
    getModuleQueue: (params: GetModuleQueueRequest = {}): Promise<GetModuleQueueResponse> =>
      callApi<GetModuleQueueResponse>('GetModuleQueue', params),

    /**
     * Update configuration for an already activated module
     *
     * @param params - Parameters for updating module configuration
     * @param params.moduleType - The module type to be updated
     * @param params.moduleName - The module name to be updated
     * @param params.parameters - An array of configuration parameters to set for the given module
     * @returns Promise resolving to success response
     *
     * @example
     * ```typescript
     * // Update PayPal gateway configuration
     * await client.modules.updateModuleConfiguration({
     *   moduleType: 'gateway',
     *   moduleName: 'paypal',
     *   parameters: {
     *     email: 'newemail@example.com',
     *     sandbox: false
     *   }
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/updatemoduleconfiguration/
     */
    updateModuleConfiguration: (params: UpdateModuleConfigurationRequest): Promise<WhmcsSuccessResponse> =>
      callApi<WhmcsSuccessResponse>('UpdateModuleConfiguration', params),
  };
}
