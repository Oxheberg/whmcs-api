import type { WhmcsResponse } from './common';

/**
 * User object from WHMCS
 */
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  datecreated: string;
  validationdata: string;
  clients: Array<{
    id: number;
    isOwner: boolean;
  }>;
}

/**
 * Parameters for getting users
 */
export interface GetUsersRequest {
  limitnum?: number;
  limitstart?: number;
  sorting?: 'asc' | 'desc';
  search?: string;
}

/**
 * Response for getting users
 */
export interface GetUsersResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  users: User[];
}

/**
 * Parameters for resetting a user's password
 */
export interface ResetPasswordRequest {
  id?: number;
  email?: string;
}

/**
 * Response for resetting a user's password
 */
export interface ResetPasswordResponse extends WhmcsResponse {
  result: 'success';
}

/**
 * Parameters for adding a user
 */
export interface AddUserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password2: string;
  language?: string;
}

/**
 * Response for adding a user
 */
export interface AddUserResponse extends WhmcsResponse {
  result: 'success';
  user_id: string;
}

/**
 * Parameters for updating a user
 */
export interface UpdateUserRequest {
  user_id: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  language?: string;
}

/**
 * Response for updating a user
 */
export interface UpdateUserResponse extends WhmcsResponse {
  result: 'success';
  user_id: string;
}

/**
 * Parameters for creating a client invite
 */
export interface CreateClientInviteRequest {
  client_id: number;
  email: string;
  permissions: string;
}

/**
 * Response for creating a client invite
 */
export interface CreateClientInviteResponse extends WhmcsResponse {
  result: 'success';
}

/**
 * Parameters for deleting user client relationship
 */
export interface DeleteUserClientRequest {
  user_id: number;
  client_id: number;
}

/**
 * Response for deleting user client relationship
 */
export interface DeleteUserClientResponse extends WhmcsResponse {
  result: 'success';
}

/**
 * Response for getting permissions list
 */
export interface GetPermissionsListResponse extends WhmcsResponse {
  result: 'success';
  permissions: string[];
}

/**
 * Parameters for getting user permissions
 */
export interface GetUserPermissionsRequest {
  user_id: number;
  client_id: number;
}

/**
 * Response for getting user permissions
 */
export interface GetUserPermissionsResponse extends WhmcsResponse {
  result: 'success';
  permissions: string[];
}

/**
 * Parameters for updating user permissions
 */
export interface UpdateUserPermissionsRequest {
  user_id: number;
  client_id: number;
  permissions: string;
}
