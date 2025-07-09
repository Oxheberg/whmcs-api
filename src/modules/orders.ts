import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';
import type {
  AcceptOrderRequest,
  AddOrderRequest,
  AddOrderResponse,
  CancelOrderRequest,
  DeleteOrderRequest,
  FraudOrderRequest,
  GetOrderStatusesResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetProductsRequest,
  GetProductsResponse,
  GetPromotionsRequest,
  GetPromotionsResponse,
  OrderFraudCheckRequest,
  OrderFraudCheckResponse,
  PendingOrderRequest,
} from '../types/orders';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Orders module factory function
 * @param callApi - The API call function
 * @returns Orders module object with all order management methods
 */
export const createOrdersModule = (callApi: CallFunction) => ({
  /**
   * Accept a pending order
   *
   * @param params - The parameters for accepting an order
   * @returns Promise that resolves when the order is accepted
   *
   * @example
   * ```typescript
   * await client.orders.acceptOrder({
   *   orderid: 123,
   *   serverid: 1,
   *   serviceusername: 'user123',
   *   servicepassword: 'password123',
   *   sendregistrar: true,
   *   autosetup: true,
   *   sendemail: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/acceptorder
   */
  acceptOrder: (params: AcceptOrderRequest) => callApi<WhmcsSuccessResponse>('AcceptOrder', params),

  /**
   * Add a new order to the system
   *
   * @param params - The parameters for creating an order
   * @returns Promise that resolves with the new order details
   *
   * @example
   * ```typescript
   * const result = await client.orders.addOrder({
   *   clientid: 1,
   *   productid: 2,
   *   paymentmethod: 'paypal',
   *   domain: 'example.com',
   *   billingcycle: 'monthly',
   *   domaintype: 'register',
   *   regperiod: 1
   * });
   * console.log(`Order created with ID: ${result.orderid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addorder
   */
  addOrder: (params: AddOrderRequest) => callApi<AddOrderResponse>('AddOrder', params),

  /**
   * Cancel a pending order
   *
   * @param params - The parameters for cancelling an order
   * @returns Promise that resolves when the order is cancelled
   *
   * @example
   * ```typescript
   * await client.orders.cancelOrder({
   *   orderid: 123,
   *   cancelsub: true,
   *   noemail: false
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/cancelorder
   */
  cancelOrder: (params: CancelOrderRequest) => callApi<WhmcsSuccessResponse>('CancelOrder', params),

  /**
   * Delete an order from the system
   *
   * @param params - The parameters for deleting an order
   * @returns Promise that resolves when the order is deleted
   *
   * @example
   * ```typescript
   * await client.orders.deleteOrder({
   *   orderid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteorder
   */
  deleteOrder: (params: DeleteOrderRequest) => callApi<WhmcsSuccessResponse>('DeleteOrder', params),

  /**
   * Mark an order as fraudulent
   *
   * @param params - The parameters for marking an order as fraud
   * @returns Promise that resolves when the order is marked as fraud
   *
   * @example
   * ```typescript
   * await client.orders.fraudOrder({
   *   orderid: 123,
   *   cancelsub: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/fraudorder
   */
  fraudOrder: (params: FraudOrderRequest) => callApi<WhmcsSuccessResponse>('FraudOrder', params),

  /**
   * Retrieve a list of orders
   *
   * @param params - Optional parameters for filtering orders
   * @returns Promise that resolves with the list of orders
   *
   * @example
   * ```typescript
   * const result = await client.orders.getOrders({
   *   limitstart: 0,
   *   limitnum: 25,
   *   clientid: 1,
   *   status: 'Active'
   * });
   * console.log(`Found ${result.totalresults} orders`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getorders
   */
  getOrders: (params: GetOrdersRequest = {}) => callApi<GetOrdersResponse>('GetOrders', params),

  /**
   * Retrieve available order statuses
   *
   * @returns Promise that resolves with the list of order statuses
   *
   * @example
   * ```typescript
   * const result = await client.orders.getOrderStatuses();
   * result.statuses.status.forEach(status => {
   *   console.log(`Status: ${status.title} (${status.color})`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getorderstatuses
   */
  getOrderStatuses: () => callApi<GetOrderStatusesResponse>('GetOrderStatuses', {}),

  /**
   * Retrieve available products
   *
   * @param params - Optional parameters for filtering products
   * @returns Promise that resolves with the list of products
   *
   * @example
   * ```typescript
   * const result = await client.orders.getProducts({
   *   gid: 1,
   *   module: 'cpanel'
   * });
   * console.log(`Found ${result.totalresults} products`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getproducts
   */
  getProducts: (params: GetProductsRequest = {}) => callApi<GetProductsResponse>('GetProducts', params),

  /**
   * Retrieve available promotions
   *
   * @param params - Optional parameters for filtering promotions
   * @returns Promise that resolves with the list of promotions
   *
   * @example
   * ```typescript
   * const result = await client.orders.getPromotions({
   *   code: 'SAVE20'
   * });
   * console.log(`Found ${result.totalresults} promotions`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getpromotions
   */
  getPromotions: (params: GetPromotionsRequest = {}) => callApi<GetPromotionsResponse>('GetPromotions', params),

  /**
   * Run fraud check on an order
   *
   * @param params - The parameters for running fraud check
   * @returns Promise that resolves with the fraud check results
   *
   * @example
   * ```typescript
   * const result = await client.orders.orderFraudCheck({
   *   orderid: 123
   * });
   * console.log(`Fraud check result: ${result.results}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/orderfraudcheck
   */
  orderFraudCheck: (params: OrderFraudCheckRequest) => callApi<OrderFraudCheckResponse>('OrderFraudCheck', params),

  /**
   * Set an order to pending status
   *
   * @param params - The parameters for setting order to pending
   * @returns Promise that resolves when the order is set to pending
   *
   * @example
   * ```typescript
   * await client.orders.pendingOrder({
   *   orderid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/pendingorder
   */
  pendingOrder: (params: PendingOrderRequest) => callApi<WhmcsSuccessResponse>('PendingOrder', params),
});
