import type { AffiliateActivateRequest, GetAffiliatesRequest, GetAffiliatesResponse } from '../types';
import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Factory function to create affiliate management methods
 */
export function createAffiliatesModule(callApi: CallFunction) {
  return {
    /**
     * Activate affiliate referrals for a specified client
     *
     * @param params - Parameters for activating affiliate
     * @param params.userid - The client ID to activate affiliate status for
     * @returns Promise resolving to success response
     *
     * @example
     * ```typescript
     * const result = await client.affiliates.activateAffiliate({
     *   userid: 1
     * });
     * console.log(result.result); // 'success'
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/affiliateactivate/
     */
    activateAffiliate: (params: AffiliateActivateRequest): Promise<WhmcsSuccessResponse> =>
      callApi<WhmcsSuccessResponse>('AffiliateActivate', params),

    /**
     * Retrieve a list of affiliates
     *
     * @param params - Optional parameters for filtering affiliates
     * @param params.limitstart - The offset for the returned affiliate data (default: 0)
     * @param params.limitnum - The number of records to return (default: 25)
     * @param params.userid - Obtain affiliate data for a specific client account
     * @param params.visitors - Provide affiliates that match a specific visitor count
     * @param params.paytype - Provide affiliates matching the paytype provided
     * @param params.payamount - Provide affiliates matching a specific overridden payout amount
     * @param params.onetime - Provide affiliates configured to receive one time affiliates
     * @param params.balance - Provide affiliates that have this balance
     * @param params.withdrawn - Provide affiliates that have withdrawn this amount
     * @returns Promise resolving to affiliates data
     *
     * @example
     * ```typescript
     * // Get all affiliates
     * const affiliates = await client.affiliates.getAffiliates();
     *
     * // Get affiliates for specific client
     * const clientAffiliates = await client.affiliates.getAffiliates({
     *   userid: 1
     * });
     *
     * // Get affiliates with pagination
     * const paginatedAffiliates = await client.affiliates.getAffiliates({
     *   limitstart: 0,
     *   limitnum: 10
     * });
     * ```
     *
     * @see https://developers.whmcs.com/api-reference/getaffiliates/
     */
    getAffiliates: (params: GetAffiliatesRequest = {}): Promise<GetAffiliatesResponse> =>
      callApi<GetAffiliatesResponse>('GetAffiliates', params),
  };
}
