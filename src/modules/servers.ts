import type { GetHealthStatusRequest, GetHealthStatusResponse, GetServersRequest, GetServersResponse } from '../types';
import type { WhmcsResponse } from '../types/common';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Factory function to create server management methods
 */
export function createServersModule(callApi: CallFunction) {
  return {
    /**
     * Get health status of the WHMCS system
     *
     * @param params - Optional parameters for health status check
     * @param params.fetchStatus - Pass as true to attempt to fetch server status values
     * @returns Promise resolving to success response
     *
     * @example
     * ```typescript
     * // Basic health check
     * const health = await client.servers.getHealthStatus();
     *
     * // Health check with server status
     * const healthWithStatus = await client.servers.getHealthStatus({
     *   fetchStatus: true
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/gethealthstatus/
     */
    getHealthStatus: (params: GetHealthStatusRequest = {}): Promise<GetHealthStatusResponse> =>
      callApi<GetHealthStatusResponse>('GetHealthStatus', params),

    /**
     * Retrieve a list of configured servers
     *
     * @param params - Optional parameters for filtering servers
     * @param params.serviceId - Pass a Product/Service ID to fetch available servers for its module type
     * @param params.addonId - Pass a Addon/Service ID to fetch available servers for its module type
     * @param params.fetchStatus - Pass as true to attempt to fetch server status values
     * @returns Promise resolving to servers data
     *
     * @example
     * ```typescript
     * // Get all servers
     * const servers = await client.servers.getServers();
     *
     * // Get servers for specific service
     * const serviceServers = await client.servers.getServers({
     *   serviceId: 1
     * });
     *
     * // Get servers with status information
     * const serversWithStatus = await client.servers.getServers({
     *   fetchStatus: true
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/getservers/
     */
    getServers: (params: GetServersRequest = {}): Promise<GetServersResponse> =>
      callApi<GetServersResponse>('GetServers', params),
  };
}
