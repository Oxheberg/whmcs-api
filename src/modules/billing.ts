import type {
  AcceptQuoteRequest,
  AddBillableItemRequest,
  AddCreditRequest,
  AddCreditResponse,
  AddInvoicePaymentRequest,
  AddPayMethodRequest,
  AddTransactionRequest,
  ApplyCreditRequest,
  ApplyCreditResponse,
  CapturePaymentRequest,
  CreateInvoiceRequest,
  CreateInvoiceResponse,
  CreateQuoteRequest,
  CreateQuoteResponse,
  DeletePayMethodRequest,
  DeleteQuoteRequest,
  GenInvoicesRequest,
  GenInvoicesResponse,
  GetCreditsRequest,
  GetCreditsResponse,
  GetInvoiceRequest,
  GetInvoiceResponse,
  GetInvoicesRequest,
  GetInvoicesResponse,
  GetPayMethodsRequest,
  GetPayMethodsResponse,
  GetQuotesRequest,
  GetQuotesResponse,
  GetTransactionsRequest,
  GetTransactionsResponse,
  SendQuoteRequest,
  UpdateInvoiceRequest,
  UpdatePayMethodRequest,
  UpdateQuoteRequest,
  UpdateTransactionRequest,
} from '../types/billing';
import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Billing module factory function
 * @param callApi - The API call function
 * @returns Billing module object with all invoice, payment, and credit management methods
 */
export const createBillingModule = (callApi: CallFunction) => ({
  /**
   * Accept a quote and convert it to an invoice
   *
   * @param params - The parameters for accepting a quote
   * @returns Promise that resolves when the quote is accepted
   *
   * @example
   * ```typescript
   * await client.billing.acceptQuote({
   *   quoteid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/acceptquote
   */
  acceptQuote: (params: AcceptQuoteRequest) => callApi<WhmcsSuccessResponse>('AcceptQuote', params),

  /**
   * Add a billable item to a client's account
   *
   * @param params - The parameters for adding a billable item
   * @returns Promise that resolves when the billable item is added
   *
   * @example
   * ```typescript
   * await client.billing.addBillableItem({
   *   clientid: 1,
   *   description: 'Additional Service',
   *   amount: 50.00,
   *   invoiceaction: 'nextinvoice',
   *   duedate: '2024-12-31'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addbillableitem
   */
  addBillableItem: (params: AddBillableItemRequest) => callApi<WhmcsSuccessResponse>('AddBillableItem', params),

  /**
   * Add credit to a client's account
   *
   * @param params - The parameters for adding credit
   * @returns Promise that resolves with the new credit balance
   *
   * @example
   * ```typescript
   * const result = await client.billing.addCredit({
   *   clientid: 1,
   *   description: 'Refund for overpayment',
   *   amount: 25.00,
   *   type: 'add'
   * });
   * console.log(`New balance: ${result.newbalance}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addcredit
   */
  addCredit: (params: AddCreditRequest) => callApi<AddCreditResponse>('AddCredit', params),

  /**
   * Add a payment to an invoice
   *
   * @param params - The parameters for adding a payment
   * @returns Promise that resolves when the payment is added
   *
   * @example
   * ```typescript
   * await client.billing.addInvoicePayment({
   *   invoiceid: 123,
   *   transid: 'TXN_123456',
   *   gateway: 'paypal',
   *   date: '2024-01-15 14:30:00',
   *   amount: 100.00,
   *   fees: 3.50
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addinvoicepayment
   */
  addInvoicePayment: (params: AddInvoicePaymentRequest) => callApi<WhmcsSuccessResponse>('AddInvoicePayment', params),

  /**
   * Add a payment method to a client's account
   *
   * @param params - The parameters for adding a payment method
   * @returns Promise that resolves when the payment method is added
   *
   * @example
   * ```typescript
   * await client.billing.addPayMethod({
   *   clientid: 1,
   *   type: 'bankaccount',
   *   description: 'Primary Bank Account',
   *   bank_name: 'Example Bank',
   *   account_number: '123456789',
   *   routing_number: '987654321',
   *   set_as_default: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addpaymethod
   */
  addPayMethod: (params: AddPayMethodRequest) => callApi<WhmcsSuccessResponse>('AddPayMethod', params),

  /**
   * Add a transaction record
   *
   * @param params - The parameters for adding a transaction
   * @returns Promise that resolves when the transaction is added
   *
   * @example
   * ```typescript
   * await client.billing.addTransaction({
   *   gateway: 'paypal',
   *   date: '2024-01-15 14:30:00',
   *   description: 'Payment for Invoice #123',
   *   amountin: 100.00,
   *   fees: 3.50,
   *   transid: 'TXN_123456',
   *   invoiceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addtransaction
   */
  addTransaction: (params: AddTransactionRequest) => callApi<WhmcsSuccessResponse>('AddTransaction', params),

  /**
   * Apply credit to an invoice
   *
   * @param params - The parameters for applying credit
   * @returns Promise that resolves with credit application details
   *
   * @example
   * ```typescript
   * const result = await client.billing.applyCredit({
   *   invoiceid: 123,
   *   amount: 50.00,
   *   noemail: false
   * });
   * console.log(`Applied ${result.amount} credit to invoice ${result.invoiceid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/applycredit
   */
  applyCredit: (params: ApplyCreditRequest) => callApi<ApplyCreditResponse>('ApplyCredit', params),

  /**
   * Capture payment for an invoice
   *
   * @param params - The parameters for capturing payment
   * @returns Promise that resolves when payment is captured
   *
   * @example
   * ```typescript
   * await client.billing.capturePayment({
   *   invoiceid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/capturepayment
   */
  capturePayment: (params: CapturePaymentRequest) => callApi<WhmcsSuccessResponse>('CapturePayment', params),

  /**
   * Create a new invoice
   *
   * @param params - The parameters for creating an invoice
   * @returns Promise that resolves with the new invoice ID
   *
   * @example
   * ```typescript
   * const result = await client.billing.createInvoice({
   *   userid: 1,
   *   date: '2024-01-15',
   *   duedate: '2024-02-15',
   *   itemdescription1: 'Web Hosting Service',
   *   itemamount1: 50.00,
   *   itemtaxed1: true,
   *   sendinvoice: true
   * });
   * console.log(`Invoice created with ID: ${result.invoiceid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createinvoice
   */
  createInvoice: (params: CreateInvoiceRequest) => callApi<CreateInvoiceResponse>('CreateInvoice', params),

  /**
   * Create a new quote
   *
   * @param params - The parameters for creating a quote
   * @returns Promise that resolves with the new quote ID
   *
   * @example
   * ```typescript
   * const result = await client.billing.createQuote({
   *   userid: 1,
   *   subject: 'Website Development Quote',
   *   stage: 'Draft',
   *   validuntil: '2024-03-15',
   *   lineitems: [
   *     {
   *       description: 'Web Design',
   *       qty: 1,
   *       up: 1500.00,
   *       taxable: true
   *     },
   *     {
   *       description: 'Domain Registration',
   *       qty: 1,
   *       up: 15.00,
   *       taxable: false
   *     }
   *   ]
   * });
   * console.log(`Quote created with ID: ${result.quoteid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createquote
   */
  createQuote: (params: CreateQuoteRequest) => callApi<CreateQuoteResponse>('CreateQuote', params),

  /**
   * Delete a payment method
   *
   * @param params - The parameters for deleting a payment method
   * @returns Promise that resolves when the payment method is deleted
   *
   * @example
   * ```typescript
   * await client.billing.deletePayMethod({
   *   paymethodid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deletepaymethod
   */
  deletePayMethod: (params: DeletePayMethodRequest) => callApi<WhmcsSuccessResponse>('DeletePayMethod', params),

  /**
   * Delete a quote
   *
   * @param params - The parameters for deleting a quote
   * @returns Promise that resolves when the quote is deleted
   *
   * @example
   * ```typescript
   * await client.billing.deleteQuote({
   *   quoteid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deletequote
   */
  deleteQuote: (params: DeleteQuoteRequest) => callApi<WhmcsSuccessResponse>('DeleteQuote', params),

  /**
   * Generate invoices for recurring services
   *
   * @param params - Optional parameters for invoice generation
   * @returns Promise that resolves with the number of invoices created
   *
   * @example
   * ```typescript
   * const result = await client.billing.genInvoices({
   *   noemail: false,
   *   clientid: 1
   * });
   * console.log(`Generated ${result.numcreated} invoices`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/geninvoices
   */
  genInvoices: (params: GenInvoicesRequest = {}) => callApi<GenInvoicesResponse>('GenInvoices', params),

  /**
   * Retrieve credit entries
   *
   * @param params - Optional parameters for filtering credits
   * @returns Promise that resolves with the list of credits
   *
   * @example
   * ```typescript
   * const result = await client.billing.getCredits({
   *   clientid: 1,
   *   limitstart: 0,
   *   limitnum: 25
   * });
   * console.log(`Found ${result.totalresults} credit entries`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getcredits
   */
  getCredits: (params: GetCreditsRequest = {}) => callApi<GetCreditsResponse>('GetCredits', params),

  /**
   * Retrieve details of a specific invoice
   *
   * @param params - The parameters for retrieving an invoice
   * @returns Promise that resolves with the invoice details
   *
   * @example
   * ```typescript
   * const result = await client.billing.getInvoice({
   *   invoiceid: 123
   * });
   * console.log(`Invoice #${result.invoicenum} - Total: ${result.total}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getinvoice
   */
  getInvoice: (params: GetInvoiceRequest) => callApi<GetInvoiceResponse>('GetInvoice', params),

  /**
   * Retrieve a list of invoices
   *
   * @param params - Optional parameters for filtering invoices
   * @returns Promise that resolves with the list of invoices
   *
   * @example
   * ```typescript
   * const result = await client.billing.getInvoices({
   *   limitstart: 0,
   *   limitnum: 25,
   *   userid: 1,
   *   status: 'Unpaid'
   * });
   * console.log(`Found ${result.totalresults} invoices`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getinvoices
   */
  getInvoices: (params: GetInvoicesRequest = {}) => callApi<GetInvoicesResponse>('GetInvoices', params),

  /**
   * Retrieve payment methods for a client
   *
   * @param params - The parameters for retrieving payment methods
   * @returns Promise that resolves with the list of payment methods
   *
   * @example
   * ```typescript
   * const result = await client.billing.getPayMethods({
   *   clientid: 1
   * });
   * result.paymethods.paymethod.forEach(method => {
   *   console.log(`${method.description} (${method.payment_type})`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getpaymethods
   */
  getPayMethods: (params: GetPayMethodsRequest) => callApi<GetPayMethodsResponse>('GetPayMethods', params),

  /**
   * Retrieve a list of quotes
   *
   * @param params - Optional parameters for filtering quotes
   * @returns Promise that resolves with the list of quotes
   *
   * @example
   * ```typescript
   * const result = await client.billing.getQuotes({
   *   limitstart: 0,
   *   limitnum: 25,
   *   userid: 1,
   *   stage: 'Sent'
   * });
   * console.log(`Found ${result.totalresults} quotes`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getquotes
   */
  getQuotes: (params: GetQuotesRequest = {}) => callApi<GetQuotesResponse>('GetQuotes', params),

  /**
   * Retrieve transaction records
   *
   * @param params - Optional parameters for filtering transactions
   * @returns Promise that resolves with the list of transactions
   *
   * @example
   * ```typescript
   * const result = await client.billing.getTransactions({
   *   clientid: 1,
   *   limitstart: 0,
   *   limitnum: 25
   * });
   * console.log(`Found ${result.totalresults} transactions`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/gettransactions
   */
  getTransactions: (params: GetTransactionsRequest = {}) => callApi<GetTransactionsResponse>('GetTransactions', params),

  /**
   * Send a quote to the client
   *
   * @param params - The parameters for sending a quote
   * @returns Promise that resolves when the quote is sent
   *
   * @example
   * ```typescript
   * await client.billing.sendQuote({
   *   quoteid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/sendquote
   */
  sendQuote: (params: SendQuoteRequest) => callApi<WhmcsSuccessResponse>('SendQuote', params),

  /**
   * Update an existing invoice
   *
   * @param params - The parameters for updating an invoice
   * @returns Promise that resolves when the invoice is updated
   *
   * @example
   * ```typescript
   * await client.billing.updateInvoice({
   *   invoiceid: 123,
   *   itemdescription: ['Updated Service Description'],
   *   itemamount: [75.00],
   *   itemtaxed: [true],
   *   duedate: '2024-03-15',
   *   notes: 'Updated invoice terms'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateinvoice
   */
  updateInvoice: (params: UpdateInvoiceRequest) => callApi<WhmcsSuccessResponse>('UpdateInvoice', params),

  /**
   * Update a payment method
   *
   * @param params - The parameters for updating a payment method
   * @returns Promise that resolves when the payment method is updated
   *
   * @example
   * ```typescript
   * await client.billing.updatePayMethod({
   *   paymethodid: 123,
   *   description: 'Updated Payment Method',
   *   set_as_default: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updatepaymethod
   */
  updatePayMethod: (params: UpdatePayMethodRequest) => callApi<WhmcsSuccessResponse>('UpdatePayMethod', params),

  /**
   * Update an existing quote
   *
   * @param params - The parameters for updating a quote
   * @returns Promise that resolves when the quote is updated
   *
   * @example
   * ```typescript
   * await client.billing.updateQuote({
   *   quoteid: 123,
   *   subject: 'Updated Quote Subject',
   *   stage: 'Sent',
   *   validuntil: '2024-04-15',
   *   lineitems: [
   *     {
   *       id: 1,
   *       description: 'Updated Service',
   *       qty: 2,
   *       up: 100.00
   *     }
   *   ]
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updatequote
   */
  updateQuote: (params: UpdateQuoteRequest) => callApi<WhmcsSuccessResponse>('UpdateQuote', params),

  /**
   * Update a transaction record
   *
   * @param params - The parameters for updating a transaction
   * @returns Promise that resolves when the transaction is updated
   *
   * @example
   * ```typescript
   * await client.billing.updateTransaction({
   *   transactionid: 123,
   *   description: 'Updated Payment Description',
   *   amountin: 110.00,
   *   fees: 4.00
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updatetransaction
   */
  updateTransaction: (params: UpdateTransactionRequest) => callApi<WhmcsSuccessResponse>('UpdateTransaction', params),
});
