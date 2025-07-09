import type {
  GetSupportDepartmentsRequest,
  GetSupportDepartmentsResponse,
  GetSupportStatusesResponse,
  GetTicketAttachmentRequest,
  GetTicketAttachmentResponse,
  GetTicketCountsRequest,
  GetTicketCountsResponse,
  GetTicketNotesRequest,
  GetTicketNotesResponse,
  GetTicketPredefinedCatsResponse,
  GetTicketPredefinedRepliesRequest,
  GetTicketPredefinedRepliesResponse,
  GetTicketRequest,
  GetTicketResponse,
  GetTicketsRequest,
  GetTicketsResponse,
  WhmcsResponse,
} from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createTicketsModule = (callApi: CallFunction) => ({
  /**
   * Retrieves the support departments configured in WHMCS.
   *
   * @param params - Optional parameters including whether to ignore empty departments
   * @returns Promise resolving to list of support departments
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getSupportDepartments({
   *   ignoreempty: true
   * });
   * console.log(response.departments);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getsupportdepartments/
   */
  getSupportDepartments: (params: GetSupportDepartmentsRequest = {}): Promise<GetSupportDepartmentsResponse> =>
    callApi<GetSupportDepartmentsResponse>('GetSupportDepartments', params),

  /**
   * Retrieves the support ticket statuses configured in WHMCS.
   *
   * @returns Promise resolving to list of support statuses
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getSupportStatuses();
   * console.log(response.statuses);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getsupportstatuses/
   */
  getSupportStatuses: (): Promise<GetSupportStatusesResponse> =>
    callApi<GetSupportStatusesResponse>('GetSupportStatuses'),

  /**
   * Retrieves a specific support ticket with its replies and notes.
   *
   * @param params - Ticket number/ID and optional reply sort order
   * @returns Promise resolving to complete ticket details
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicket({
   *   ticketid: 123,
   *   repliessort: 'DESC'
   * });
   * console.log(response.subject);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticket/
   */
  getTicket: (params: GetTicketRequest): Promise<GetTicketResponse> => callApi<GetTicketResponse>('GetTicket', params),

  /**
   * Downloads a specific attachment from a support ticket.
   *
   * @param params - Ticket ID and attachment ID to download
   * @returns Promise resolving to attachment data and filename
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicketAttachment({
   *   ticketid: 123,
   *   attachmentid: 1
   * });
   * console.log(response.filename, response.data);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticketattachment/
   */
  getTicketAttachment: (params: GetTicketAttachmentRequest): Promise<GetTicketAttachmentResponse> =>
    callApi<GetTicketAttachmentResponse>('GetTicketAttachment', params),

  /**
   * Retrieves support ticket counts by status and department.
   *
   * @param params - Optional parameters for filtering by department or status
   * @returns Promise resolving to ticket count statistics
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicketCounts({
   *   deptid: 1,
   *   status: 'Open'
   * });
   * console.log(response.allactive.count);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticketcounts/
   */
  getTicketCounts: (params: GetTicketCountsRequest = {}): Promise<GetTicketCountsResponse> =>
    callApi<GetTicketCountsResponse>('GetTicketCounts', params),

  /**
   * Retrieves internal notes associated with a support ticket.
   *
   * @param params - Ticket ID to retrieve notes for
   * @returns Promise resolving to list of ticket notes
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicketNotes({
   *   ticketid: 123
   * });
   * console.log(response.notes);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticketnotes/
   */
  getTicketNotes: (params: GetTicketNotesRequest): Promise<GetTicketNotesResponse> =>
    callApi<GetTicketNotesResponse>('GetTicketNotes', params),

  /**
   * Retrieves predefined ticket categories for organizing canned responses.
   *
   * @returns Promise resolving to list of predefined categories
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicketPredefinedCats();
   * console.log(response.categories);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticketpredefinedcats/
   */
  getTicketPredefinedCats: (): Promise<GetTicketPredefinedCatsResponse> =>
    callApi<GetTicketPredefinedCatsResponse>('GetTicketPredefinedCats'),

  /**
   * Retrieves predefined replies/canned responses for support tickets.
   *
   * @param params - Optional category ID to filter replies
   * @returns Promise resolving to list of predefined replies
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTicketPredefinedReplies({
   *   catid: 1
   * });
   * console.log(response.predefinedreplies);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getticketpredefinedreplies/
   */
  getTicketPredefinedReplies: (
    params: GetTicketPredefinedRepliesRequest = {},
  ): Promise<GetTicketPredefinedRepliesResponse> =>
    callApi<GetTicketPredefinedRepliesResponse>('GetTicketPredefinedReplies', params),

  /**
   * Retrieves a list of support tickets with optional filtering and pagination.
   *
   * @param params - Optional parameters for filtering, pagination, and search
   * @returns Promise resolving to paginated list of tickets
   *
   * @example
   * ```typescript
   * const response = await client.tickets.getTickets({
   *   limitstart: 0,
   *   limitnum: 25,
   *   deptid: 1,
   *   status: 'Open'
   * });
   * console.log(response.tickets);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/gettickets/
   */
  getTickets: (params: GetTicketsRequest = {}): Promise<GetTicketsResponse> =>
    callApi<GetTicketsResponse>('GetTickets', params),
});
