import type { WhmcsResponse, WhmcsSuccessResponse } from '../types/common';
import type {
  AddUserRequest,
  AddUserResponse,
  CreateClientInviteRequest,
  DeleteUserClientRequest,
  GetPermissionsListResponse,
  GetUserPermissionsRequest,
  GetUserPermissionsResponse,
  GetUsersRequest,
  GetUsersResponse,
  ResetPasswordRequest,
  UpdateUserPermissionsRequest,
  UpdateUserRequest,
  UpdateUserResponse,
} from '../types/users';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createUsersModule = (callApi: CallFunction) => ({
  /**
   * Retrieves a list of users from WHMCS
   *
   * @param params - Optional parameters for filtering and pagination
   * @returns Promise resolving to users list with pagination info
   *
   * @example
   * ```typescript
   * // Get first 10 users
   * const response = await client.users.getUsers({ limitnum: 10 });
   * console.log(response.users);
   *
   * // Search for users
   * const searchResults = await client.users.getUsers({
   *   search: 'john',
   *   limitnum: 5
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getusers/
   */
  getUsers: (params: GetUsersRequest = {}): Promise<GetUsersResponse> => callApi<GetUsersResponse>('GetUsers', params),

  /**
   * Starts the password reset process for a user
   *
   * @param params - User identification parameters (either id or email is required)
   * @returns Promise resolving to success confirmation
   *
   * @throws {Error} When neither id nor email is provided
   *
   * @example
   * ```typescript
   * // Reset password by email
   * await client.users.resetPassword({ email: 'john@example.com' });
   *
   * // Reset password by user ID
   * await client.users.resetPassword({ id: 123 });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/resetpassword/
   */
  resetPassword: (params: ResetPasswordRequest): Promise<WhmcsSuccessResponse> => {
    if (!params.id && !params.email) {
      throw new Error('Either id or email is required for password reset');
    }
    return callApi<WhmcsSuccessResponse>('ResetPassword', params);
  },

  /**
   * Add a new user to WHMCS
   *
   * @param params - User details for the new account
   * @returns Promise resolving to the new user ID
   *
   * @example
   * ```typescript
   * const newUser = await client.users.addUser({
   *   firstname: 'John',
   *   lastname: 'Doe',
   *   email: 'john.doe@example.com',
   *   password2: 'securepassword123',
   *   language: 'english'
   * });
   * console.log('New user ID:', newUser.user_id);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/adduser/
   */
  addUser: (params: AddUserRequest): Promise<AddUserResponse> => callApi<AddUserResponse>('AddUser', params),

  /**
   * Update an existing user's details
   *
   * @param params - User ID and fields to update
   * @returns Promise resolving to the updated user ID
   *
   * @example
   * ```typescript
   * // Update user's name
   * await client.users.updateUser({
   *   user_id: 123,
   *   firstname: 'Jane',
   *   lastname: 'Smith'
   * });
   *
   * // Update email and language
   * await client.users.updateUser({
   *   user_id: 123,
   *   email: 'jane.smith@example.com',
   *   language: 'french'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateuser/
   */
  updateUser: (params: UpdateUserRequest): Promise<UpdateUserResponse> =>
    callApi<UpdateUserResponse>('UpdateUser', params),

  /**
   * Send an invite to manage a client
   *
   * @param params - Client ID, email, and permissions for the invite
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * // Send invite with specific permissions
   * await client.users.createClientInvite({
   *   client_id: '1',
   *   email: 'manager@example.com',
   *   permissions: 'profile,contacts,products,manageproducts,domains,tickets'
   * });
   *
   * // Basic invite with minimal permissions
   * await client.users.createClientInvite({
   *   client_id: '5',
   *   email: 'user@example.com',
   *   permissions: 'profile,tickets'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createclientinvite/
   */
  createClientInvite: (params: CreateClientInviteRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('CreateClientInvite', params),

  /**
   * Delete relationship between user and client
   *
   * @param params - User ID and Client ID to remove association
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * // Remove user from client
   * await client.users.deleteUserClient({
   *   user_id: 123,
   *   client_id: 456
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteuserclient/
   */
  deleteUserClient: (params: DeleteUserClientRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DeleteUserClient', params),

  /**
   * Retrieve a list of permissions that can be used when creating a user
   *
   * @returns Promise resolving to available permissions list
   *
   * @example
   * ```typescript
   * const permissionsList = await client.users.getPermissionsList();
   * console.log('Available permissions:', permissionsList.permissions);
   *
   * // Use in createClientInvite
   * const permissions = permissionsList.permissions.slice(0, 3).join(',');
   * await client.users.createClientInvite({
   *   client_id: '1',
   *   email: 'user@example.com',
   *   permissions
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getpermissionslist/
   */
  getPermissionsList: (): Promise<GetPermissionsListResponse> =>
    callApi<GetPermissionsListResponse>('GetPermissionsList'),

  /**
   * Provide the permissions of a user for a client
   *
   * @param params - User ID and Client ID to get permissions for
   * @returns Promise resolving to user's permissions for the specified client
   *
   * @example
   * ```typescript
   * const userPermissions = await client.users.getUserPermissions({
   *   user_id: 123,
   *   client_id: 456
   * });
   * console.log('User permissions:', userPermissions.permissions);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getuserpermissions/
   */
  getUserPermissions: (params: GetUserPermissionsRequest): Promise<GetUserPermissionsResponse> =>
    callApi<GetUserPermissionsResponse>('GetUserPermissions', params),

  /**
   * Update the permissions of a user for a client
   *
   * @param params - User ID, Client ID, and comma-separated permissions
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * // Grant full permissions
   * await client.users.updateUserPermissions({
   *   user_id: 123,
   *   client_id: 456,
   *   permissions: 'profile,contacts,products,manageproducts,productsso,domains,managedomains,invoices,quotes,tickets,affiliates,emails,orders'
   * });
   *
   * // Restrict to basic permissions
   * await client.users.updateUserPermissions({
   *   user_id: 123,
   *   client_id: 456,
   *   permissions: 'profile,tickets'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateuserpermissions/
   */
  updateUserPermissions: (params: UpdateUserPermissionsRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('UpdateUserPermissions', params),
});
