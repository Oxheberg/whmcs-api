import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';
import type {
  AddBannedIpRequest,
  DecryptPasswordRequest,
  DecryptPasswordResponse,
  EncryptPasswordRequest,
  EncryptPasswordResponse,
  GetActivityLogRequest,
  GetActivityLogResponse,
  GetAdminDetailsResponse,
  GetAdminUsersRequest,
  GetAdminUsersResponse,
  GetAutomationLogRequest,
  GetAutomationLogResponse,
  GetConfigurationValueRequest,
  GetConfigurationValueResponse,
  GetCurrenciesResponse,
  GetEmailTemplatesRequest,
  GetEmailTemplatesResponse,
  GetPaymentMethodsResponse,
  GetStaffOnlineResponse,
  GetStatsResponse,
  GetToDoItemStatusesResponse,
  GetToDoItemsRequest,
  GetToDoItemsResponse,
  LogActivityRequest,
  SendAdminEmailRequest,
  SendEmailRequest,
  SetConfigurationValueRequest,
  TriggerNotificationEventRequest,
  UpdateAdminNotesRequest,
  UpdateAnnouncementRequest,
  UpdateToDoItemRequest,
  WhmcsDetailsResponse,
} from '../types/system';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * System module factory function
 * @param callApi - The API call function
 * @returns System module object with all administrative and system management methods
 */
export const createSystemModule = (callApi: CallFunction) => ({
  /**
   * Add a banned IP address
   *
   * @param params - The parameters for adding a banned IP
   * @returns Promise that resolves when the IP is banned
   *
   * @example
   * ```typescript
   * await client.system.addBannedIp({
   *   ip: '192.168.1.100',
   *   reason: 'Repeated failed login attempts',
   *   days: 30
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addbannedip
   */
  addBannedIp: (params: AddBannedIpRequest) => callApi<WhmcsSuccessResponse>('AddBannedIp', params),

  /**
   * Decrypt a password
   *
   * @param params - The parameters for decrypting a password
   * @returns Promise that resolves with the decrypted password
   *
   * @example
   * ```typescript
   * const result = await client.system.decryptPassword({
   *   password2: 'encrypted_password_string'
   * });
   * console.log(`Decrypted password: ${result.password}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/decryptpassword
   */
  decryptPassword: (params: DecryptPasswordRequest) => callApi<DecryptPasswordResponse>('DecryptPassword', params),

  /**
   * Encrypt a password
   *
   * @param params - The parameters for encrypting a password
   * @returns Promise that resolves with the encrypted password
   *
   * @example
   * ```typescript
   * const result = await client.system.encryptPassword({
   *   password2: 'plaintext_password'
   * });
   * console.log(`Encrypted password: ${result.password}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/encryptpassword
   */
  encryptPassword: (params: EncryptPasswordRequest) => callApi<EncryptPasswordResponse>('EncryptPassword', params),

  /**
   * Retrieve activity log entries
   *
   * @param params - Optional parameters for filtering activity log
   * @returns Promise that resolves with the activity log entries
   *
   * @example
   * ```typescript
   * const result = await client.system.getActivityLog({
   *   limitstart: 0,
   *   limitnum: 25,
   *   userid: 1,
   *   date: '2024-01-15'
   * });
   * console.log(`Found ${result.totalresults} activity entries`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getactivitylog
   */
  getActivityLog: (params: GetActivityLogRequest = {}) => callApi<GetActivityLogResponse>('GetActivityLog', params),

  /**
   * Retrieve admin user details
   *
   * @param params - The parameters for retrieving admin details
   * @returns Promise that resolves with the admin details
   *
   * @example
   * ```typescript
   * const result = await client.system.getAdminDetails({
   *   adminid: 1
   * });
   * console.log(`Admin: ${result.firstname} ${result.lastname} (${result.email})`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getadmindetails
   */
  getAdminDetails: (params: { adminid: number }) => callApi<GetAdminDetailsResponse>('GetAdminDetails', params),

  /**
   * Retrieve a list of admin users
   *
   * @param params - Optional parameters for filtering admin users
   * @returns Promise that resolves with the list of admin users
   *
   * @example
   * ```typescript
   * const result = await client.system.getAdminUsers({
   *   limitstart: 0,
   *   limitnum: 25,
   *   search: 'john'
   * });
   * console.log(`Found ${result.totalresults} admin users`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getadminusers
   */
  getAdminUsers: (params: GetAdminUsersRequest = {}) => callApi<GetAdminUsersResponse>('GetAdminUsers', params),

  /**
   * Retrieve automation log entries
   *
   * @param params - Optional parameters for filtering automation log
   * @returns Promise that resolves with the automation log entries
   *
   * @example
   * ```typescript
   * const result = await client.system.getAutomationLog({
   *   limitstart: 0,
   *   limitnum: 25
   * });
   * console.log(`Found ${result.totalresults} automation entries`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getautomationlog
   */
  getAutomationLog: (params: GetAutomationLogRequest = {}) =>
    callApi<GetAutomationLogResponse>('GetAutomationLog', params),

  /**
   * Retrieve a configuration value
   *
   * @param params - The parameters for retrieving configuration value
   * @returns Promise that resolves with the configuration value
   *
   * @example
   * ```typescript
   * const result = await client.system.getConfigurationValue({
   *   setting: 'SystemURL'
   * });
   * console.log(`System URL: ${result.value}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getconfigurationvalue
   */
  getConfigurationValue: (params: GetConfigurationValueRequest) =>
    callApi<GetConfigurationValueResponse>('GetConfigurationValue', params),

  /**
   * Retrieve available currencies
   *
   * @returns Promise that resolves with the list of currencies
   *
   * @example
   * ```typescript
   * const result = await client.system.getCurrencies();
   * result.currencies.currency.forEach(currency => {
   *   console.log(`${currency.code}: ${currency.prefix}${currency.suffix}`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getcurrencies
   */
  getCurrencies: () => callApi<GetCurrenciesResponse>('GetCurrencies', {}),

  /**
   * Retrieve email templates
   *
   * @param params - Optional parameters for filtering email templates
   * @returns Promise that resolves with the list of email templates
   *
   * @example
   * ```typescript
   * const result = await client.system.getEmailTemplates({
   *   type: 'product',
   *   language: 'english'
   * });
   * console.log(`Found ${result.totalresults} email templates`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getemailtemplates
   */
  getEmailTemplates: (params: GetEmailTemplatesRequest = {}) =>
    callApi<GetEmailTemplatesResponse>('GetEmailTemplates', params),

  /**
   * Retrieve available payment methods
   *
   * @returns Promise that resolves with the list of payment methods
   *
   * @example
   * ```typescript
   * const result = await client.system.getPaymentMethods();
   * result.paymentmethods.paymentmethod.forEach(method => {
   *   console.log(`${method.displayname} (${method.module})`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getpaymentmethods
   */
  getPaymentMethods: () => callApi<GetPaymentMethodsResponse>('GetPaymentMethods', {}),

  /**
   * Retrieve currently online staff members
   *
   * @returns Promise that resolves with the list of online staff
   *
   * @example
   * ```typescript
   * const result = await client.system.getStaffOnline();
   * result.staff.forEach(member => {
   *   console.log(`${member.name} is online`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getstaffonline
   */
  getStaffOnline: () => callApi<GetStaffOnlineResponse>('GetStaffOnline', {}),

  /**
   * Retrieve system statistics
   *
   * @param params - Optional parameters for filtering statistics
   * @returns Promise that resolves with the system statistics
   *
   * @example
   * ```typescript
   * const result = await client.system.getStats({
   *   stat: 'income'
   * });
   * console.log(`Income this month: ${result.income_thismonth}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getstats
   */
  getStats: (params: { stat?: string } = {}) => callApi<GetStatsResponse>('GetStats', params),

  /**
   * Retrieve to-do items
   *
   * @param params - Optional parameters for filtering to-do items
   * @returns Promise that resolves with the list of to-do items
   *
   * @example
   * ```typescript
   * const result = await client.system.getToDoItems({
   *   limitstart: 0,
   *   limitnum: 25,
   *   status: 'New'
   * });
   * console.log(`Found ${result.totalresults} to-do items`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/gettodoitems
   */
  getToDoItems: (params: GetToDoItemsRequest = {}) => callApi<GetToDoItemsResponse>('GetToDoItems', params),

  /**
   * Retrieve available to-do item statuses
   *
   * @returns Promise that resolves with the list of to-do item statuses
   *
   * @example
   * ```typescript
   * const result = await client.system.getToDoItemStatuses();
   * result.todostatuses.status.forEach(status => {
   *   console.log(`Status: ${status.title} (${status.color})`);
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/gettodoitemstatuses
   */
  getToDoItemStatuses: () => callApi<GetToDoItemStatusesResponse>('GetToDoItemStatuses', {}),

  /**
   * Log an activity entry
   *
   * @param params - The parameters for logging an activity
   * @returns Promise that resolves when the activity is logged
   *
   * @example
   * ```typescript
   * await client.system.logActivity({
   *   command: 'Custom Action',
   *   description: 'User performed a custom action via API',
   *   user: 'API User',
   *   userid: 1,
   *   ipaddress: '192.168.1.100'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/logactivity
   */
  logActivity: (params: LogActivityRequest) => callApi<WhmcsSuccessResponse>('LogActivity', params),

  /**
   * Send an email to an admin
   *
   * @param params - The parameters for sending admin email
   * @returns Promise that resolves when the email is sent
   *
   * @example
   * ```typescript
   * await client.system.sendAdminEmail({
   *   messagename: 'Support Ticket Opened',
   *   mergefields: {
   *     client_name: 'John Doe',
   *     ticket_subject: 'Server Issues'
   *   },
   *   type: 'admin',
   *   deptid: 1
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/sendadminemail
   */
  sendAdminEmail: (params: SendAdminEmailRequest) => callApi<WhmcsSuccessResponse>('SendAdminEmail', params),

  /**
   * Send an email
   *
   * @param params - The parameters for sending an email
   * @returns Promise that resolves when the email is sent
   *
   * @example
   * ```typescript
   * await client.system.sendEmail({
   *   messagename: 'Invoice Created',
   *   id: 123,
   *   customtype: 'invoice',
   *   customsubject: 'Your Invoice is Ready',
   *   custommessage: 'Please find your invoice attached.',
   *   customvars: 'invoice_id=123|amount=100.00'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/sendemail
   */
  sendEmail: (params: SendEmailRequest) => callApi<WhmcsSuccessResponse>('SendEmail', params),

  /**
   * Set a configuration value
   *
   * @param params - The parameters for setting configuration value
   * @returns Promise that resolves when the configuration is set
   *
   * @example
   * ```typescript
   * await client.system.setConfigurationValue({
   *   setting: 'SystemURL',
   *   value: 'https://mycompany.com/whmcs/'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/setconfigurationvalue
   */
  setConfigurationValue: (params: SetConfigurationValueRequest) =>
    callApi<WhmcsSuccessResponse>('SetConfigurationValue', params),

  /**
   * Trigger a notification event
   *
   * @param params - The parameters for triggering notification
   * @returns Promise that resolves when the notification is triggered
   *
   * @example
   * ```typescript
   * await client.system.triggerNotificationEvent({
   *   notification_identifier: 'service.created',
   *   recipient: 'admin@company.com',
   *   merge_fields: {
   *     client_name: 'John Doe',
   *     service_name: 'Web Hosting'
   *   }
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/triggernotificationevent
   */
  triggerNotificationEvent: (params: TriggerNotificationEventRequest) =>
    callApi<WhmcsSuccessResponse>('TriggerNotificationEvent', params),

  /**
   * Update admin notes
   *
   * @param params - The parameters for updating admin notes
   * @returns Promise that resolves when the notes are updated
   *
   * @example
   * ```typescript
   * await client.system.updateAdminNotes({
   *   adminid: 1,
   *   notes: 'Updated admin notes with latest information.'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateadminnotes
   */
  updateAdminNotes: (params: UpdateAdminNotesRequest) => callApi<WhmcsSuccessResponse>('UpdateAdminNotes', params),

  /**
   * Update an announcement
   *
   * @param params - The parameters for updating an announcement
   * @returns Promise that resolves when the announcement is updated
   *
   * @example
   * ```typescript
   * await client.system.updateAnnouncement({
   *   announcementid: 123,
   *   title: 'Updated Maintenance Window',
   *   announcement: 'Maintenance has been rescheduled to January 25th.',
   *   published: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateannouncement
   */
  updateAnnouncement: (params: UpdateAnnouncementRequest) =>
    callApi<WhmcsSuccessResponse>('UpdateAnnouncement', params),

  /**
   * Update a to-do item
   *
   * @param params - The parameters for updating a to-do item
   * @returns Promise that resolves when the to-do item is updated
   *
   * @example
   * ```typescript
   * await client.system.updateToDoItem({
   *   itemid: 123,
   *   title: 'Updated Task Title',
   *   description: 'Updated task description',
   *   status: 'In Progress',
   *   duedate: '2024-02-15'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updatetodoitem
   */
  updateToDoItem: (params: UpdateToDoItemRequest) => callApi<WhmcsSuccessResponse>('UpdateToDoItem', params),

  /**
   * Retrieve WHMCS details and version information
   *
   * @returns Promise that resolves with WHMCS system details
   *
   * @example
   * ```typescript
   * const result = await client.system.whmcsDetails();
   * console.log(`WHMCS Version: ${result.version}`);
   * console.log(`PHP Version: ${result.php_version}`);
   * console.log(`MySQL Version: ${result.mysql_version}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/whmcsdetails
   */
  whmcsDetails: () => callApi<WhmcsDetailsResponse>('WhmcsDetails', {}),
});
