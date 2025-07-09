import type {
  AddClientRequest,
  AddClientResponse,
  AddContactRequest,
  AddContactResponse,
  CloseClientRequest,
  DeleteClientRequest,
  DeleteContactRequest,
  GetCancelledPackagesRequest,
  GetCancelledPackagesResponse,
  GetClientGroupsResponse,
  GetClientPasswordRequest,
  GetClientPasswordResponse,
  GetClientsAddonsRequest,
  GetClientsAddonsResponse,
  GetClientsDetailsCleanResponse,
  GetClientsDetailsRequest,
  GetClientsDetailsResponse,
  GetClientsDomainsRequest,
  GetClientsDomainsResponse,
  GetClientsProductsRequest,
  GetClientsProductsResponse,
  GetClientsRequest,
  GetClientsResponse,
  GetContactsRequest,
  GetContactsResponse,
  GetEmailsRequest,
  GetEmailsResponse,
  UpdateClientRequest,
  UpdateContactRequest,
} from '../types/client';
import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

/**
 * Client module factory function
 * @param callApi - The API call function
 * @returns Client module object with all client management methods
 */
export const createClientModule = (callApi: CallFunction) => ({
  /**
   * Add a new client to the system
   *
   * @param params - The parameters for creating a client
   * @returns Promise that resolves with the new client ID
   *
   * @example
   * ```typescript
   * const result = await client.client.addClient({
   *   firstname: 'John',
   *   lastname: 'Doe',
   *   email: 'john.doe@example.com',
   *   address1: '123 Main Street',
   *   city: 'New York',
   *   state: 'NY',
   *   postcode: '10001',
   *   country: 'US',
   *   phonenumber: '+1-555-123-4567',
   *   password2: 'securepassword123',
   *   currency: 1,
   *   notes: 'VIP client - requires priority support'
   * });
   * console.log(`Client created with ID: ${result.clientid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addclient
   */
  addClient: (params: AddClientRequest) => callApi<AddClientResponse>('AddClient', params),

  /**
   * Add a contact to an existing client
   *
   * @param params - The parameters for creating a contact
   * @returns Promise that resolves with the new contact ID
   *
   * @example
   * ```typescript
   * const result = await client.client.addContact({
   *   clientid: 1,
   *   firstname: 'Jane',
   *   lastname: 'Doe',
   *   email: 'jane.doe@example.com',
   *   address1: '123 Main Street',
   *   city: 'New York',
   *   state: 'NY',
   *   postcode: '10001',
   *   country: 'US',
   *   phonenumber: '+1-555-123-4568',
   *   permissions: 'profile,contacts,products,tickets'
   * });
   * console.log(`Contact created with ID: ${result.contactid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addcontact
   */
  addContact: (params: AddContactRequest) => callApi<AddContactResponse>('AddContact', params),

  /**
   * Close a client account
   *
   * @param params - The parameters for closing a client
   * @returns Promise that resolves when the client is closed
   *
   * @example
   * ```typescript
   * await client.client.closeClient({
   *   clientid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/closeclient
   */
  closeClient: (params: CloseClientRequest) => callApi<WhmcsSuccessResponse>('CloseClient', params),

  /**
   * Delete a client from the system
   *
   * @param params - The parameters for deleting a client
   * @returns Promise that resolves when the client is deleted
   *
   * @example
   * ```typescript
   * await client.client.deleteClient({
   *   clientid: 123,
   *   deleteusers: true,
   *   deletetransactions: false
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteclient
   */
  deleteClient: (params: DeleteClientRequest) => callApi<WhmcsSuccessResponse>('DeleteClient', params),

  /**
   * Delete a contact from a client
   *
   * @param params - The parameters for deleting a contact
   * @returns Promise that resolves when the contact is deleted
   *
   * @example
   * ```typescript
   * await client.client.deleteContact({
   *   contactid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deletecontact
   */
  deleteContact: (params: DeleteContactRequest) => callApi<WhmcsSuccessResponse>('DeleteContact', params),

  /**
   * Retrieve cancelled packages for clients
   *
   * @param params - Optional parameters for filtering cancelled packages
   * @returns Promise that resolves with the list of cancelled packages
   *
   * @example
   * ```typescript
   * const result = await client.client.getCancelledPackages({
   *   limitstart: 0,
   *   limitnum: 25,
   *   clientid: 1
   * });
   * console.log(`Found ${result.totalresults} cancelled packages`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getcancelledpackages
   */
  getCancelledPackages: (params: GetCancelledPackagesRequest = {}) =>
    callApi<GetCancelledPackagesResponse>('GetCancelledPackages', params),

  /**
   * Retrieve client groups
   *
   * @param params - Optional parameters for filtering client groups
   * @returns Promise that resolves with the list of client groups
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientGroups({
   *   limitstart: 0,
   *   limitnum: 25
   * });
   * console.log(`Found ${result.totalresults} client groups`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientgroups
   */
  getClientGroups: (params: { limitstart?: number; limitnum?: number } = {}) =>
    callApi<GetClientGroupsResponse>('GetClientGroups', params),

  /**
   * Retrieve a client's password
   *
   * @param params - The parameters for retrieving client password
   * @returns Promise that resolves with the client password
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientPassword({
   *   userid: 1
   * });
   * console.log(`Client password: ${result.password}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientpassword
   */
  getClientPassword: (params: GetClientPasswordRequest) =>
    callApi<GetClientPasswordResponse>('GetClientPassword', params),

  /**
   * Retrieve a list of clients
   *
   * @param params - Optional parameters for filtering clients
   * @returns Promise that resolves with the list of clients
   *
   * @example
   * ```typescript
   * const result = await client.client.getClients({
   *   limitstart: 0,
   *   limitnum: 25,
   *   search: 'john',
   *   status: 'Active'
   * });
   * console.log(`Found ${result.totalresults} clients`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclients
   */
  getClients: (params: GetClientsRequest = {}) => callApi<GetClientsResponse>('GetClients', params),

  /**
   * Retrieve addons for a client
   *
   * @param params - The parameters for retrieving client addons
   * @returns Promise that resolves with the list of client addons
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientsAddons({
   *   clientid: 1,
   *   limitstart: 0,
   *   limitnum: 25
   * });
   * console.log(`Found ${result.totalresults} addons`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientsaddons
   */
  getClientsAddons: (params: GetClientsAddonsRequest) => callApi<GetClientsAddonsResponse>('GetClientsAddons', params),

  /**
   * Retrieve detailed information about a client
   *
   * @param params - The parameters for retrieving client details
   * @returns Promise that resolves with the client details
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientsDetails({
   *   clientid: 1,
   *   stats: true
   * });
   * console.log(`Client: ${result.client.firstname} ${result.client.lastname} (${result.client.email})`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientsdetails
   */
  getClientsDetails: async (params: GetClientsDetailsRequest): Promise<GetClientsDetailsCleanResponse> => {
    const response = await callApi<GetClientsDetailsResponse>('GetClientsDetails', params);

    // Transform the response to remove redundant data and optimize structure
    return {
      result: response.result,
      client: {
        id: response.client.id,
        owner_user_id: response.client.owner_user_id,
        uuid: response.client.uuid,
        firstname: response.client.firstname,
        lastname: response.client.lastname,
        fullname: response.client.fullname,
        companyname: response.client.companyname,
        email: response.client.email,
        address1: response.client.address1,
        address2: response.client.address2,
        city: response.client.city,
        state: response.client.state,
        postcode: response.client.postcode,
        countrycode: response.client.countrycode,
        country: response.client.country,
        phonenumber: response.client.phonenumber,
        tax_id: response.client.tax_id,
        email_preferences: {
          general: Boolean(response.client.email_preferences.general),
          invoice: Boolean(response.client.email_preferences.invoice),
          support: Boolean(response.client.email_preferences.support),
          product: Boolean(response.client.email_preferences.product),
          domain: Boolean(response.client.email_preferences.domain),
          affiliate: Boolean(response.client.email_preferences.affiliate),
        },
        countryname: response.client.countryname,
        phonecc: response.client.phonecc,
        phonenumberformatted: response.client.phonenumberformatted,
        billingcid: response.client.billingcid,
        notes: response.client.notes,
        currency: response.client.currency,
        currency_code: response.client.currency_code,
        defaultgateway: response.client.defaultgateway,
        groupid: response.client.groupid,
        status: response.client.status,
        credit: response.client.credit,
        taxexempt: response.client.taxexempt,
        latefeeoveride: response.client.latefeeoveride,
        overideduenotices: response.client.overideduenotices,
        separateinvoices: response.client.separateinvoices,
        disableautocc: response.client.disableautocc,
        emailoptout: response.client.emailoptout,
        marketing_emails_opt_in: response.client.marketing_emails_opt_in,
        overrideautoclose: response.client.overrideautoclose,
        allowSingleSignOn: Boolean(response.client.allowSingleSignOn),
        email_verified: response.client.email_verified,
        language: response.client.language,
        tax_state: response.client.tax_state,
        tax_countrycode: response.client.tax_countrycode,
        lastlogin: response.client.lastlogin,
        customfields: response.client.customfields,
      },
      users: response.users.user,
      stats: response.stats,
    };
  },

  /**
   * Retrieve domains for a client
   *
   * @param params - The parameters for retrieving client domains
   * @returns Promise that resolves with the list of client domains
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientsDomains({
   *   clientid: 1,
   *   limitstart: 0,
   *   limitnum: 25,
   *   status: 'Active'
   * });
   * console.log(`Found ${result.totalresults} domains`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientsdomains
   */
  getClientsDomains: (params: GetClientsDomainsRequest) =>
    callApi<GetClientsDomainsResponse>('GetClientsDomains', params),

  /**
   * Retrieve products/services for a client
   *
   * @param params - The parameters for retrieving client products
   * @returns Promise that resolves with the list of client products
   *
   * @example
   * ```typescript
   * const result = await client.client.getClientsProducts({
   *   clientid: 1,
   *   limitstart: 0,
   *   limitnum: 25,
   *   status: 'Active',
   *   productid: 5
   * });
   * console.log(`Found ${result.totalresults} products`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getclientsproducts
   */
  getClientsProducts: (params: GetClientsProductsRequest) =>
    callApi<GetClientsProductsResponse>('GetClientsProducts', params),

  /**
   * Retrieve contacts for a client
   *
   * @param params - The parameters for retrieving contacts
   * @returns Promise that resolves with the list of contacts
   *
   * @example
   * ```typescript
   * const result = await client.client.getContacts({
   *   limitstart: 0,
   *   limitnum: 25,
   *   userid: 1,
   *   firstname: 'John'
   * });
   * console.log(`Found ${result.totalresults} contacts`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getcontacts
   */
  getContacts: (params: GetContactsRequest = {}) => callApi<GetContactsResponse>('GetContacts', params),

  /**
   * Retrieve emails sent to clients
   *
   * @param params - The parameters for retrieving emails
   * @returns Promise that resolves with the list of emails
   *
   * @example
   * ```typescript
   * const result = await client.client.getEmails({
   *   limitstart: 0,
   *   limitnum: 25,
   *   clientid: 1,
   *   subject: 'Invoice'
   * });
   * console.log(`Found ${result.totalresults} emails`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getemails
   */
  getEmails: (params: GetEmailsRequest = {}) => callApi<GetEmailsResponse>('GetEmails', params),

  /**
   * Update an existing client
   *
   * @param params - The parameters for updating a client
   * @returns Promise that resolves with the updated client ID
   *
   * @example
   * ```typescript
   * const result = await client.client.updateClient({
   *   clientid: 1,
   *   firstname: 'Jane',
   *   lastname: 'Smith',
   *   email: 'jane.smith@example.com',
   *   phonenumber: '+1-555-987-6543',
   *   notes: 'Updated contact information'
   * });
   * console.log(`Updated client with ID: ${result.clientid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateclient
   */
  updateClient: (params: UpdateClientRequest) => callApi<WhmcsSuccessResponse>('UpdateClient', params),

  /**
   * Update an existing contact
   *
   * @param params - The parameters for updating a contact
   * @returns Promise that resolves with the updated contact ID
   *
   * @example
   * ```typescript
   * const result = await client.client.updateContact({
   *   contactid: 123,
   *   firstname: 'Jane',
   *   lastname: 'Smith',
   *   email: 'jane.smith@example.com',
   *   phonenumber: '+1-555-987-6543',
   *   permissions: 'profile,contacts,products,domains,tickets'
   * });
   * console.log(`Updated contact with ID: ${result.contactid}`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updatecontact
   */
  updateContact: (params: UpdateContactRequest) => callApi<WhmcsSuccessResponse>('UpdateContact', params),
});
