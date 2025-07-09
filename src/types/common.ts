/**
 * WHMCS API client configuration options
 */
export interface WhmcsClientOptions {
  /** WHMCS API endpoint URL */
  url: string;
  /** API identifier for authentication */
  identifier: string;
  /** API secret for authentication */
  secret: string;
  /** Access key to bypass IP restrictions */
  accesskey?: string;
  /** Request timeout in milliseconds (default: 30000) */
  timeout?: number;
}

/**
 * Standard WHMCS API response structure
 */
export interface WhmcsResponse {
  result: 'success' | 'error';
}

/**
 * WHMCS API request parameters
 */
export interface WhmcsSuccessResponse extends WhmcsResponse {
  result: 'success';
}

/**
 * WHMCS API error response
 */
export interface WhmcsErrorResponse extends WhmcsResponse {
  result: 'error';
  message: string;
}
