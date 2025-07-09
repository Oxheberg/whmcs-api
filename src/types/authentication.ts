import type { WhmcsResponse, WhmcsSuccessResponse } from './common';

export interface CreateOAuthCredentialRequest {
  grantType: 'authorization_code' | 'single_sign_on';
  scope: string;
  name?: string;
  serviceId?: number;
  description?: string;
  logoUri?: string;
  redirectUri?: string;
}

export interface CreateOAuthCredentialResponse extends WhmcsSuccessResponse {
  credentialId: string;
  clientIdentifier: string;
  clientSecret: string;
}

export interface CreateSsoTokenRequest {
  client_id?: number;
  user_id?: number;
  destination?: string;
  service_id?: number;
  domain_id?: number;
  sso_redirect_path?: string;
}

export interface CreateSsoTokenResponse extends WhmcsResponse {
  result: 'success';
  access_token: string;
  redirect_url: string;
}

export interface DeleteOAuthCredentialRequest {
  credentialId: number;
}

export interface DeleteOAuthCredentialResponse extends WhmcsSuccessResponse {
  credentialId: string;
}

export interface ListOAuthCredentialsRequest {
  grantType?: string;
  sortField?: string;
  sortOrder?: 'ASC' | 'DESC';
  limit?: number;
}

export interface ListOAuthCredentialsResponse extends WhmcsResponse {
  result: 'success';
  clients: Array<{
    credentialId: number;
    name: string;
    description: string;
    grantTypes: string;
    scope: string;
    clientIdentifier: string;
    clientSecret: string;
    uuid: string | null;
    serviceId: number;
    logoUri: string;
    redirectUri: string[];
    rsaKeyPairId: number;
    createdAt: string;
    updatedAt: string;
  }>;
}

export interface UpdateOAuthCredentialRequest {
  credentialId?: number;
  clientApiIdentifier?: string;
  name?: string;
  description?: string;
  grantType?: 'authorization_code' | 'single_sign_on';
  scope?: string;
  serviceId?: number;
  logoUri?: string;
  redirectUri?: string[];
  resetSecret?: boolean;
}

export interface UpdateOAuthCredentialResponse extends WhmcsSuccessResponse {
  credentialId: string;
  newClientSecret?: string;
}

export interface ValidateLoginRequest {
  email: string;
  password2: string;
}

export interface ValidateLoginResponse extends WhmcsResponse {
  result: 'success';
  userid: string;
  passwordhash?: string;
  twoFactorEnabled: string;
}
