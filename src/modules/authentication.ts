import type {
  CreateOAuthCredentialRequest,
  CreateOAuthCredentialResponse,
  CreateSsoTokenRequest,
  CreateSsoTokenResponse,
  DeleteOAuthCredentialRequest,
  DeleteOAuthCredentialResponse,
  ListOAuthCredentialsRequest,
  ListOAuthCredentialsResponse,
  UpdateOAuthCredentialRequest,
  UpdateOAuthCredentialResponse,
  ValidateLoginRequest,
  ValidateLoginResponse,
  WhmcsResponse,
} from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createAuthenticationModule = (callApi: CallFunction) => ({
  /**
   * Creates a new OAuth credential for API access or single sign-on.
   *
   * @param params - Grant type, scope, and optional configuration for the OAuth credential
   * @returns Promise resolving to new credential details including client ID and secret
   *
   * @example
   * ```typescript
   * const response = await client.authentication.createOAuthCredential({
   *   grantType: 'single_sign_on',
   *   scope: 'clientarea:sso clientarea:billing_info',
   *   serviceId: 1,
   *   description: 'SSO for billing portal'
   * });
   * console.log(response.clientIdentifier, response.clientSecret);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createoauthcredential/
   */
  createOAuthCredential: (params: CreateOAuthCredentialRequest): Promise<CreateOAuthCredentialResponse> =>
    callApi<CreateOAuthCredentialResponse>('CreateOAuthCredential', params),

  /**
   * Creates a single-use SSO token for client or user authentication.
   *
   * @param params - Optional client/user ID, destination, and service context
   * @returns Promise resolving to access token and redirect URL
   *
   * @example
   * ```typescript
   * const response = await client.authentication.createSsoToken({
   *   client_id: 123,
   *   destination: 'clientarea:product_details',
   *   service_id: 1
   * });
   * console.log(response.access_token, response.redirect_url);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createssotoken/
   */
  createSsoToken: (params: CreateSsoTokenRequest = {}): Promise<CreateSsoTokenResponse> =>
    callApi<CreateSsoTokenResponse>('CreateSsoToken', params),

  /**
   * Permanently deletes an OAuth credential record.
   *
   * @param params - Credential ID to delete
   * @returns Promise resolving to confirmation with deleted credential ID
   *
   * @example
   * ```typescript
   * const response = await client.authentication.deleteOAuthCredential({
   *   credentialId: 1
   * });
   * console.log('Deleted credential:', response.credentialId);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteoauthcredential/
   */
  deleteOAuthCredential: (params: DeleteOAuthCredentialRequest): Promise<DeleteOAuthCredentialResponse> =>
    callApi<DeleteOAuthCredentialResponse>('DeleteOAuthCredential', params),

  /**
   * Retrieves a list of OAuth credentials matching specified criteria.
   *
   * @param params - Optional filtering, sorting, and pagination parameters
   * @returns Promise resolving to list of OAuth credentials with details
   *
   * @example
   * ```typescript
   * const response = await client.authentication.listOAuthCredentials({
   *   grantType: 'single_sign_on',
   *   limit: 10
   * });
   * console.log(response.clients);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/listoauthcredentials/
   */
  listOAuthCredentials: (params: ListOAuthCredentialsRequest = {}): Promise<ListOAuthCredentialsResponse> =>
    callApi<ListOAuthCredentialsResponse>('ListOAuthCredentials', params),

  /**
   * Updates an existing OAuth credential configuration.
   *
   * @param params - Credential ID/identifier and properties to update
   * @returns Promise resolving to updated credential details
   *
   * @example
   * ```typescript
   * const response = await client.authentication.updateOAuthCredential({
   *   credentialId: 1,
   *   name: 'Updated Credential Name',
   *   resetSecret: true
   * });
   * console.log('New secret:', response.newClientSecret);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateoauthcredential/
   */
  updateOAuthCredential: (params: UpdateOAuthCredentialRequest): Promise<UpdateOAuthCredentialResponse> =>
    callApi<UpdateOAuthCredentialResponse>('UpdateOAuthCredential', params),

  /**
   * Validates user login credentials and creates an authentication session.
   *
   * @param params - Email address and password to validate
   * @returns Promise resolving to user ID, password hash, and 2FA status
   *
   * @example
   * ```typescript
   * const response = await client.authentication.validateLogin({
   *   email: 'user@example.com',
   *   password2: 'userpassword'
   * });
   * console.log('User ID:', response.userid);
   * if (response.passwordhash) {
   *   console.log('Session token:', response.passwordhash);
   * }
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/validatelogin/
   */
  validateLogin: (params: ValidateLoginRequest): Promise<ValidateLoginResponse> =>
    callApi<ValidateLoginResponse>('ValidateLogin', params),
});
