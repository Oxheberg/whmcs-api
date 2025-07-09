import type { UpdateClientAddonRequest, WhmcsResponse, WhmcsSuccessResponse } from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createAddonsModule = (callApi: CallFunction) => ({
  /**
   * Updates a client addon with new status, dates, or other properties.
   *
   * @param params - Addon ID and properties to update including status, dates, and notes
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.addons.updateClientAddon({
   *   id: 1,
   *   status: 'Active',
   *   nextduedate: '2024-12-01',
   *   notes: 'Updated addon configuration'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateclientaddon/
   */
  updateClientAddon: (params: UpdateClientAddonRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('UpdateClientAddon', params),
});
