import type {
  AddProjectMessageRequest,
  AddProjectTaskRequest,
  CreateProjectRequest,
  CreateProjectResponse,
  DeleteProjectTaskRequest,
  EndTaskTimerRequest,
  GetProjectRequest,
  GetProjectResponse,
  GetProjectsRequest,
  GetProjectsResponse,
  StartTaskTimerRequest,
  UpdateProjectRequest,
  UpdateProjectTaskRequest,
  WhmcsResponse,
  WhmcsSuccessResponse,
} from '../types';

type CallFunction = <T extends WhmcsResponse>(action: string, params?: object) => Promise<T>;

export const createProjectManagementModule = (callApi: CallFunction) => ({
  /**
   * Adds a message to an existing project.
   *
   * @param params - Project ID and message content with optional admin ID
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.addProjectMessage({
   *   projectid: 1,
   *   message: 'Project update: initial requirements gathered',
   *   adminid: 2
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addprojectmessage/
   */
  addProjectMessage: (params: AddProjectMessageRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('AddProjectMessage', params),

  /**
   * Adds a task to an existing project with specified due date.
   *
   * @param params - Project ID, due date, and optional task details
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.addProjectTask({
   *   projectid: 1,
   *   duedate: '2024-01-15',
   *   task: 'Complete wireframes',
   *   adminid: 2,
   *   notes: 'Focus on mobile responsive design'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/addprojecttask/
   */
  addProjectTask: (params: AddProjectTaskRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('AddProjectTask', params),

  /**
   * Creates a new project with specified title and admin assignment.
   *
   * @param params - Project title, admin ID, and optional details
   * @returns Promise resolving to new project details
   *
   * @example
   * ```typescript
   * const response = await client.projectManagement.createProject({
   *   title: 'Website Redesign Project',
   *   adminid: 2,
   *   userid: 5,
   *   duedate: '2024-03-01',
   *   status: 'Pending'
   * });
   * console.log('Created project ID:', response.projectid);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/createproject/
   */
  createProject: (params: CreateProjectRequest): Promise<CreateProjectResponse> =>
    callApi<CreateProjectResponse>('CreateProject', params),

  /**
   * Deletes a task from a project. This action cannot be undone.
   *
   * @param params - Project ID and task ID to delete
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.deleteProjectTask({
   *   projectid: 1,
   *   taskid: 5
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/deleteprojecttask/
   */
  deleteProjectTask: (params: DeleteProjectTaskRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('DeleteProjectTask', params),

  /**
   * Ends a task timer that was previously started.
   *
   * @param params - Timer ID and optional project/admin details
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.endTaskTimer({
   *   timerid: 3,
   *   projectid: 1,
   *   adminid: 2
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/endtasktimer/
   */
  endTaskTimer: (params: EndTaskTimerRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('EndTaskTimer', params),

  /**
   * Retrieves details for a specific project including tasks and messages.
   *
   * @param params - Project ID to retrieve
   * @returns Promise resolving to complete project information
   *
   * @example
   * ```typescript
   * const project = await client.projectManagement.getProject({
   *   projectid: 1
   * });
   * console.log('Project info:', project.projectinfo);
   * console.log('Tasks:', project.tasks);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getproject/
   */
  getProject: (params: GetProjectRequest): Promise<GetProjectResponse> =>
    callApi<GetProjectResponse>('GetProject', params),

  /**
   * Retrieves a list of projects matching specified criteria.
   *
   * @param params - Optional filtering and pagination parameters
   * @returns Promise resolving to projects list with pagination info
   *
   * @example
   * ```typescript
   * const projects = await client.projectManagement.getProjects({
   *   userid: 5,
   *   status: 'Active',
   *   limitnum: 10
   * });
   * console.log(`Found ${projects.totalresults} projects`);
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/getprojects/
   */
  getProjects: (params: GetProjectsRequest = {}): Promise<GetProjectsResponse> =>
    callApi<GetProjectsResponse>('GetProjects', params),

  /**
   * Starts a timer for tracking time spent on a project task.
   *
   * @param params - Timer ID, project ID, and optional admin details
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.startTaskTimer({
   *   timerid: 3,
   *   projectid: 1,
   *   adminid: 2
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/starttasktimer/
   */
  startTaskTimer: (params: StartTaskTimerRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('StartTaskTimer', params),

  /**
   * Updates an existing project's details.
   *
   * @param params - Project ID and fields to update
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.updateProject({
   *   projectid: 1,
   *   status: 'Completed',
   *   completed: true,
   *   notes: 'Project finished ahead of schedule'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateproject/
   */
  updateProject: (params: UpdateProjectRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('UpdateProject', params),

  /**
   * Updates an existing project task's details.
   *
   * @param params - Task ID and fields to update
   * @returns Promise resolving to success confirmation
   *
   * @example
   * ```typescript
   * await client.projectManagement.updateProjectTask({
   *   taskid: 5,
   *   completed: true,
   *   notes: 'Task completed successfully'
   * });
   * ```
   *
   * @see https://developers.whmcs.com/api-reference/updateprojecttask/
   */
  updateProjectTask: (params: UpdateProjectTaskRequest): Promise<WhmcsSuccessResponse> =>
    callApi<WhmcsSuccessResponse>('UpdateProjectTask', params),
});
