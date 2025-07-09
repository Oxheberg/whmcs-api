import type {
  ModuleChangePackageRequest,
  ModuleChangePwRequest,
  ModuleCreateRequest,
  ModuleCustomRequest,
  ModuleSuspendRequest,
  ModuleTerminateRequest,
  ModuleUnsuspendRequest,
  UpdateClientProductRequest,
  UpdateClientProductResponse,
  UpgradeProductRequest,
  UpgradeProductResponse,
  WhmcsResponse,
  WhmcsSuccessResponse,
} from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createServicesModule = (callApi: CallFunction) => ({
  /**
   * Runs a change package action for a service module.
   *
   * @param params - Service ID to change package for
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleChangePackage({
   *   serviceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/modulechangepackage/
   */
  moduleChangePackage: (params: ModuleChangePackageRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleChangePackage', params),

  /**
   * Runs a change password action for a service module.
   *
   * @param params - Service ID and optional new password
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleChangePw({
   *   serviceid: 123,
   *   servicepassword: 'newSecurePassword123'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/modulechangepw/
   */
  moduleChangePw: (params: ModuleChangePwRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleChangePw', params),

  /**
   * Runs the module create action for a service.
   *
   * @param params - Service ID to create
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleCreate({
   *   serviceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/modulecreate/
   */
  moduleCreate: (params: ModuleCreateRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleCreate', params),

  /**
   * Runs a custom module action for a service.
   *
   * @param params - Service ID and custom function name
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleCustom({
   *   serviceid: 123,
   *   func_name: 'reboot'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/modulecustom/
   */
  moduleCustom: (params: ModuleCustomRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleCustom', params),

  /**
   * Runs the module suspend action for a service.
   *
   * @param params - Service ID and optional suspension reason
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleSuspend({
   *   serviceid: 123,
   *   suspendreason: 'Non-payment'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/modulesuspend/
   */
  moduleSuspend: (params: ModuleSuspendRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleSuspend', params),

  /**
   * Runs the module terminate action for a service.
   *
   * @param params - Service ID to terminate
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleTerminate({
   *   serviceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/moduleterminate/
   */
  moduleTerminate: (params: ModuleTerminateRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleTerminate', params),

  /**
   * Runs the module unsuspend action for a service.
   *
   * @param params - Service ID to unsuspend
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.services.moduleUnsuspend({
   *   serviceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/moduleunsuspend/
   */
  moduleUnsuspend: (params: ModuleUnsuspendRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('ModuleUnsuspend', params),

  /**
   * Updates details of an existing client service.
   *
   * @param params - Service ID and fields to update
   * @returns Promise resolving to updated service details
   *
   * @example
   * ```typescript
   * const response = await client.services.updateClientProduct({
   *   serviceid: 123,
   *   domain: 'newdomain.com',
   *   status: 'Active',
   *   nextduedate: '2024-12-31'
   * });
   * console.log('Updated service:', response.serviceid);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateclientproduct/
   */
  updateClientProduct: (params: UpdateClientProductRequest): Promise<UpdateClientProductResponse> =>
    callApi<UpdateClientProductResponse>('UpdateClientProduct', params),

  /**
   * Upgrades an existing product or calculates upgrade costs.
   *
   * @param params - Service ID, payment method, upgrade type, and new product details
   * @returns Promise resolving to upgrade details including pricing and order information
   *
   * @example
   * ```typescript
   * const upgrade = await client.services.upgradeProduct({
   *   serviceid: 123,
   *   paymentmethod: 'paypal',
   *   type: 'product',
   *   newproductid: 456,
   *   newproductbillingcycle: 'annually'
   * });
   * console.log('Upgrade price:', upgrade.price);
   * console.log('Order ID:', upgrade.orderid);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/upgradeproduct/
   */
  upgradeProduct: (params: UpgradeProductRequest): Promise<UpgradeProductResponse> =>
    callApi<UpgradeProductResponse>('UpgradeProduct', params),
});
