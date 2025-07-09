import type { WhmcsErrorResponse } from '../types/common';

/**
 * Base error class for WHMCS API errors
 */
export class WhmcsError extends Error {
  constructor(
    message: string,
    public readonly response?: WhmcsErrorResponse,
  ) {
    super(message);
    this.name = 'WhmcsError';
  }
}

/**
 * Error thrown when WHMCS API returns an error response
 */
export class WhmcsApiError extends WhmcsError {
  constructor(response: WhmcsErrorResponse) {
    super(response.message, response);
    this.name = 'WhmcsApiError';
  }
}

/**
 * Error thrown when there's a network or request issue
 */
export class WhmcsNetworkError extends WhmcsError {
  constructor(message: string) {
    super(message);
    this.name = 'WhmcsNetworkError';
  }
}
