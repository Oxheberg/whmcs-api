import type { AddProductRequest, AddProductResponse, WhmcsResponse } from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createProductsModule = (callApi: CallFunction) => ({
  /**
   * Adds a new product to the WHMCS system to be available for purchase by clients.
   *
   * @param params - Product configuration including name, group ID, type, pricing, and other settings
   * @returns Promise resolving to the new product ID
   *
   * @example
   * ```typescript
   * const response = await client.products.addProduct({
   *   name: 'Premium Hosting',
   *   gid: 1,
   *   type: 'hostingaccount',
   *   paytype: 'recurring',
   *   pricing: {
   *     1: {
   *       monthly: 9.99,
   *       annually: 99.99
   *     }
   *   }
   * });
   * console.log('Created product ID:', response.pid);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addproduct/
   */
  addProduct: (params: AddProductRequest): Promise<AddProductResponse> =>
    callApi<AddProductResponse>('AddProduct', params),
});
