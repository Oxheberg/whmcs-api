import type {
  CreateOrUpdateTLDRequest,
  CreateOrUpdateTLDResponse,
  DomainGetLockingStatusRequest,
  DomainGetLockingStatusResponse,
  DomainGetNameserversRequest,
  DomainGetNameserversResponse,
  DomainGetWhoisInfoRequest,
  DomainGetWhoisInfoResponse,
  DomainRegisterRequest,
  DomainReleaseRequest,
  DomainRenewRequest,
  DomainRequestEPPRequest,
  DomainToggleIdProtectRequest,
  DomainTransferRequest,
  DomainUpdateLockingStatusRequest,
  DomainUpdateNameserversRequest,
  DomainUpdateWhoisInfoRequest,
  DomainWhoisRequest,
  DomainWhoisResponse,
  GetRegistrarsResponse,
  GetTLDPricingRequest,
  GetTLDPricingResponse,
  UpdateClientDomainRequest,
  UpdateClientDomainResponse,
  WhmcsResponse,
  WhmcsSuccessResponse,
} from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createDomainsModule = (callApi: CallFunction) => ({
  /**
   * Creates or updates a Top-Level Domain (TLD) configuration with pricing.
   *
   * @param params - TLD extension and configuration including pricing, features, and registrar settings
   * @returns Promise resolving to TLD configuration and pricing details
   *
   * @example
   * ```typescript
   * const response = await client.domains.createOrUpdateTLD({
   *   extension: '.com',
   *   id_protection: true,
   *   dns_management: true,
   *   auto_registrar: 'enom',
   *   register: { 1: 10.00, 2: 20.00 }
   * });
   * console.log(response.extension);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createorupdatetld/
   */
  createOrUpdateTLD: (params: CreateOrUpdateTLDRequest): Promise<CreateOrUpdateTLDResponse> =>
    callApi<CreateOrUpdateTLDResponse>('CreateOrUpdateTLD', params),

  /**
   * Retrieves the current locking status of a domain from the registrar.
   *
   * @param params - Domain ID to check locking status for
   * @returns Promise resolving to current lock status
   *
   * @example
   * ```typescript
   * const response = await client.domains.domainGetLockingStatus({
   *   domainid: 123
   * });
   * console.log(response.lockstatus);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domaingetlockingstatus/
   */
  domainGetLockingStatus: (params: DomainGetLockingStatusRequest): Promise<DomainGetLockingStatusResponse> =>
    callApi<DomainGetLockingStatusResponse>('DomainGetLockingStatus', params),

  /**
   * Retrieves the current nameservers for a domain from the registrar.
   *
   * @param params - Domain ID to get nameservers for
   * @returns Promise resolving to current nameserver configuration
   *
   * @example
   * ```typescript
   * const response = await client.domains.domainGetNameservers({
   *   domainid: 123
   * });
   * console.log(response.ns1, response.ns2);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domaingetnameservers/
   */
  domainGetNameservers: (params: DomainGetNameserversRequest): Promise<DomainGetNameserversResponse> =>
    callApi<DomainGetNameserversResponse>('DomainGetNameservers', params),

  /**
   * Retrieves WHOIS information for a domain from the registrar.
   *
   * @param params - Domain ID to get WHOIS information for
   * @returns Promise resolving to WHOIS data
   *
   * @example
   * ```typescript
   * const response = await client.domains.domainGetWhoisInfo({
   *   domainid: 123
   * });
   * console.log(response.whois);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domaingetwhoisinfo/
   */
  domainGetWhoisInfo: (params: DomainGetWhoisInfoRequest): Promise<DomainGetWhoisInfoResponse> =>
    callApi<DomainGetWhoisInfoResponse>('DomainGetWhoisInfo', params),

  /**
   * Sends a registration command to the registrar for a domain.
   *
   * @param params - Domain ID and optional registrar specification
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainRegister({
   *   domainid: 123,
   *   registrar: 'enom'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainregister/
   */
  domainRegister: (params: DomainRegisterRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainRegister', params),

  /**
   * Releases a domain to a new tag/registrar (UK domains).
   *
   * @param params - Domain ID and new tag for release
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainRelease({
   *   domainid: 123,
   *   newtag: 'NEWTAG'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainrelease/
   */
  domainRelease: (params: DomainReleaseRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainRelease', params),

  /**
   * Sends a renewal command to the registrar for a domain.
   *
   * @param params - Domain ID and optional registration period
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainRenew({
   *   domainid: 123,
   *   regperiod: 1
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainrenew/
   */
  domainRenew: (params: DomainRenewRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainRenew', params),

  /**
   * Requests the EPP (auth) code for a domain from the registrar.
   *
   * @param params - Domain ID to request EPP code for
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainRequestEPP({
   *   domainid: 123
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainrequestepp/
   */
  domainRequestEPP: (params: DomainRequestEPPRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainRequestEPP', params),

  /**
   * Toggles ID protection (privacy) for a domain at the registrar.
   *
   * @param params - Domain ID and optional protection enable/disable flag
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainToggleIdProtect({
   *   domainid: 123,
   *   protectenable: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domaintoggleidprotect/
   */
  domainToggleIdProtect: (params: DomainToggleIdProtectRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainToggleIdProtect', params),

  /**
   * Initiates a domain transfer command at the registrar.
   *
   * @param params - Domain ID, transfer secret, and optional registrar
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainTransfer({
   *   domainid: 123,
   *   transfersecret: 'EPP_CODE_HERE',
   *   registrar: 'enom'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domaintransfer/
   */
  domainTransfer: (params: DomainTransferRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainTransfer', params),

  /**
   * Updates the locking status of a domain at the registrar.
   *
   * @param params - Domain ID and optional lock status flag
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainUpdateLockingStatus({
   *   domainid: 123,
   *   lockstatus: true
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainupdatelockingstatus/
   */
  domainUpdateLockingStatus: (params: DomainUpdateLockingStatusRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainUpdateLockingStatus', params),

  /**
   * Updates the nameservers for a domain at the registrar.
   *
   * @param params - Domain ID/name and nameserver configuration (ns1, ns2 required)
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainUpdateNameservers({
   *   domainid: 123,
   *   ns1: 'ns1.example.com',
   *   ns2: 'ns2.example.com'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainupdatenameservers/
   */
  domainUpdateNameservers: (params: DomainUpdateNameserversRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainUpdateNameservers', params),

  /**
   * Updates WHOIS contact information for a domain at the registrar.
   *
   * @param params - Domain ID and contact information to update
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.domains.domainUpdateWhoisInfo({
   *   domainid: 123,
   *   firstname: 'John',
   *   lastname: 'Doe',
   *   email: 'john@example.com'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainupdatewhoisinfo/
   */
  domainUpdateWhoisInfo: (params: DomainUpdateWhoisInfoRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DomainUpdateWhoisInfo', params),

  /**
   * Performs a WHOIS lookup for any domain name.
   *
   * @param params - Domain name to perform WHOIS lookup on
   * @returns Promise resolving to WHOIS information and status
   *
   * @example
   * ```typescript
   * const response = await client.domains.domainWhois({
   *   domain: 'example.com'
   * });
   * console.log(response.whois, response.status);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/domainwhois/
   */
  domainWhois: (params: DomainWhoisRequest): Promise<DomainWhoisResponse> =>
    callApi<DomainWhoisResponse>('DomainWhois', params),

  /**
   * Retrieves a list of active registrars configured in WHMCS.
   *
   * @returns Promise resolving to list of available registrars
   *
   * @example
   * ```typescript
   * const response = await client.domains.getRegistrars();
   * console.log(response.registrars);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getregistrars/
   */
  getRegistrars: (): Promise<GetRegistrarsResponse> => callApi<GetRegistrarsResponse>('GetRegistrars'),

  /**
   * Retrieves TLD pricing information for registration, transfer, and renewal.
   *
   * @param params - Optional client ID and currency ID for pricing context
   * @returns Promise resolving to comprehensive TLD pricing data
   *
   * @example
   * ```typescript
   * const response = await client.domains.getTLDPricing({
   *   clientid: 123,
   *   currencyid: 1
   * });
   * console.log(response.pricing);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/gettldpricing/
   */
  getTLDPricing: (params: GetTLDPricingRequest = {}): Promise<GetTLDPricingResponse> =>
    callApi<GetTLDPricingResponse>('GetTLDPricing', params),

  /**
   * Updates client domain properties including status, dates, and configuration.
   *
   * @param params - Domain ID and properties to update
   * @returns Promise resolving to updated domain ID
   *
   * @example
   * ```typescript
   * const response = await client.domains.updateClientDomain({
   *   domainid: 123,
   *   status: 'Active',
   *   nextduedate: '2024-12-01',
   *   dnsmanagement: true
   * });
   * console.log(response.domainid);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateclientdomain/
   */
  updateClientDomain: (params: UpdateClientDomainRequest): Promise<UpdateClientDomainResponse> =>
    callApi<UpdateClientDomainResponse>('UpdateClientDomain', params),
});
