import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';
import type {
  AddAnnouncementRequest,
  AddCancelRequestRequest,
  AddClientNoteRequest,
  AddTicketNoteRequest,
  AddTicketReplyRequest,
  BlockTicketSenderRequest,
  DeleteAnnouncementRequest,
  DeleteTicketNoteRequest,
  DeleteTicketReplyRequest,
  DeleteTicketRequest,
  GetAnnouncementsRequest,
  GetAnnouncementsResponse,
  MergeTicketRequest,
  OpenTicketRequest,
  OpenTicketResponse,
  UpdateTicketReplyRequest,
  UpdateTicketRequest,
} from '../types/support';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Support module factory function
 * @param callApi - The API call function
 * @returns Support module object with all announcement and ticket management methods
 */
export const createSupportModule = (callApi: CallFunction) => ({
  /**
   * Add a new announcement
   *
   * @param params - The parameters for creating an announcement
   * @returns Promise that resolves when the announcement is created
   *
   * @example
   * ```typescript
   * await client.support.addAnnouncement({
   *   date: '2024-01-15',
   *   title: 'Scheduled Maintenance',
   *   announcement: 'We will be performing scheduled maintenance on January 20th from 2:00 AM to 4:00 AM EST.',
   *   published: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addannouncement
   */
  addAnnouncement: (params: AddAnnouncementRequest) => callApi<WhmcsSuccessResponse>('AddAnnouncement', params),

  /**
   * Add a cancellation request for a service
   *
   * @param params - The parameters for creating a cancellation request
   * @returns Promise that resolves when the cancellation request is created
   *
   * @example
   * ```typescript
   * await client.support.addCancelRequest({
   *   serviceid: 123,
   *   type: 'end_of_billing_period',
   *   reason: 'No longer needed'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addcancelrequest
   */
  addCancelRequest: (params: AddCancelRequestRequest) => callApi<WhmcsSuccessResponse>('AddCancelRequest', params),

  /**
   * Add a note to a client's account
   *
   * @param params - The parameters for adding a client note
   * @returns Promise that resolves when the note is added
   *
   * @example
   * ```typescript
   * await client.support.addClientNote({
   *   userid: 1,
   *   notes: 'Client requested custom configuration for their hosting service.',
   *   sticky: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addclientnote
   */
  addClientNote: (params: AddClientNoteRequest) => callApi<WhmcsSuccessResponse>('AddClientNote', params),

  /**
   * Add a note to a support ticket
   *
   * @param params - The parameters for adding a ticket note
   * @returns Promise that resolves when the note is added
   *
   * @example
   * ```typescript
   * await client.support.addTicketNote({
   *   ticketid: 123,
   *   message: 'Internal note: Client called to follow up on this issue.',
   *   markdown: false,
   *   attachments: [
   *     {
   *       name: 'screenshot.png',
   *       data: 'base64_encoded_file_data'
   *     }
   *   ]
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addticketnote
   */
  addTicketNote: (params: AddTicketNoteRequest) => callApi<WhmcsSuccessResponse>('AddTicketNote', params),

  /**
   * Add a reply to a support ticket
   *
   * @param params - The parameters for adding a ticket reply
   * @returns Promise that resolves when the reply is added
   *
   * @example
   * ```typescript
   * await client.support.addTicketReply({
   *   ticketid: 123,
   *   message: 'Thank you for contacting us. We are looking into your issue and will respond shortly.',
   *   markdown: false,
   *   clientid: 1,
   *   contactid: 2,
   *   noemail: false,
   *   customfields: 'a=1|b=2'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addticketreply
   */
  addTicketReply: (params: AddTicketReplyRequest) => callApi<WhmcsSuccessResponse>('AddTicketReply', params),

  /**
   * Block a ticket sender from creating new tickets
   *
   * @param params - The parameters for blocking a ticket sender
   * @returns Promise that resolves when the sender is blocked
   *
   * @example
   * ```typescript
   * await client.support.blockTicketSender({
   *   ticketid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/blockticketsender
   */
  blockTicketSender: (params: BlockTicketSenderRequest) => callApi<WhmcsSuccessResponse>('BlockTicketSender', params),

  /**
   * Delete an announcement
   *
   * @param params - The parameters for deleting an announcement
   * @returns Promise that resolves when the announcement is deleted
   *
   * @example
   * ```typescript
   * await client.support.deleteAnnouncement({
   *   announcementid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteannouncement
   */
  deleteAnnouncement: (params: DeleteAnnouncementRequest) =>
    callApi<WhmcsSuccessResponse>('DeleteAnnouncement', params),

  /**
   * Delete a support ticket
   *
   * @param params - The parameters for deleting a ticket
   * @returns Promise that resolves when the ticket is deleted
   *
   * @example
   * ```typescript
   * await client.support.deleteTicket({
   *   ticketid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteticket
   */
  deleteTicket: (params: DeleteTicketRequest) => callApi<WhmcsSuccessResponse>('DeleteTicket', params),

  /**
   * Delete a ticket note
   *
   * @param params - The parameters for deleting a ticket note
   * @returns Promise that resolves when the note is deleted
   *
   * @example
   * ```typescript
   * await client.support.deleteTicketNote({
   *   noteid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteticketnote
   */
  deleteTicketNote: (params: DeleteTicketNoteRequest) => callApi<WhmcsSuccessResponse>('DeleteTicketNote', params),

  /**
   * Delete a ticket reply
   *
   * @param params - The parameters for deleting a ticket reply
   * @returns Promise that resolves when the reply is deleted
   *
   * @example
   * ```typescript
   * await client.support.deleteTicketReply({
   *   replyid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteticketreply
   */
  deleteTicketReply: (params: DeleteTicketReplyRequest) => callApi<WhmcsSuccessResponse>('DeleteTicketReply', params),

  /**
   * Retrieve announcements
   *
   * @param params - Optional parameters for filtering announcements
   * @returns Promise that resolves with the list of announcements
   *
   * @example
   * ```typescript
   * const result = await client.support.getAnnouncements({
   *   limitstart: 0,
   *   limitnum: 10,
   *   published: true
   * });
   * console.log(`Found ${result.totalresults} announcements`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getannouncements
   */
  getAnnouncements: (params: GetAnnouncementsRequest = {}) =>
    callApi<GetAnnouncementsResponse>('GetAnnouncements', params),

  /**
   * Merge one ticket into another
   *
   * @param params - The parameters for merging tickets
   * @returns Promise that resolves when the tickets are merged
   *
   * @example
   * ```typescript
   * await client.support.mergeTicket({
   *   ticketid: 123,
   *   mergeticketid: 456
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/mergeticket
   */
  mergeTicket: (params: MergeTicketRequest) => callApi<WhmcsSuccessResponse>('MergeTicket', params),

  /**
   * Open a new support ticket
   *
   * @param params - The parameters for creating a ticket
   * @returns Promise that resolves with the new ticket details
   *
   * @example
   * ```typescript
   * const result = await client.support.openTicket({
   *   deptid: 1,
   *   clientid: 1,
   *   subject: 'Email Setup Issue',
   *   message: 'I am having trouble setting up my email client. Can you please help?',
   *   priority: 'High',
   *   serviceid: 123,
   *   markdown: false,
   *   useMarkdown: false,
   *   attachments: [
   *     {
   *       name: 'error_screenshot.png',
   *       data: 'base64_encoded_image_data'
   *     }
   *   ]
   * });
   * console.log(`Ticket created with ID: ${result.id}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/openticket
   */
  openTicket: (params: OpenTicketRequest) => callApi<OpenTicketResponse>('OpenTicket', params),

  /**
   * Update an existing support ticket
   *
   * @param params - The parameters for updating a ticket
   * @returns Promise that resolves when the ticket is updated
   *
   * @example
   * ```typescript
   * await client.support.updateTicket({
   *   ticketid: 123,
   *   subject: 'Updated: Email Setup Issue - Resolved',
   *   priority: 'Low',
   *   status: 'Answered',
   *   flag: 1
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateticket
   */
  updateTicket: (params: UpdateTicketRequest) => callApi<WhmcsSuccessResponse>('UpdateTicket', params),

  /**
   * Update a ticket reply
   *
   * @param params - The parameters for updating a ticket reply
   * @returns Promise that resolves when the reply is updated
   *
   * @example
   * ```typescript
   * await client.support.updateTicketReply({
   *   replyid: 123,
   *   message: 'Updated reply content with additional information.'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateticketreply
   */
  updateTicketReply: (params: UpdateTicketReplyRequest) => callApi<WhmcsSuccessResponse>('UpdateTicketReply', params),
});
