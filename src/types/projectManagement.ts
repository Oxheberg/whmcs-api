import type { WhmcsResponse, WhmcsSuccessResponse } from './common';

export interface AddProjectMessageRequest {
  projectid: number;
  message: string;
  adminid?: number;
}

export interface AddProjectTaskRequest {
  projectid: number;
  duedate: string;
  adminid?: number;
  task?: string;
  notes?: string;
  completed?: boolean;
  billed?: boolean;
}

export interface CreateProjectRequest {
  title: string;
  adminid: number;
  userid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  ticketids?: string;
  invoiceids?: string;
}

export interface CreateProjectResponse extends WhmcsSuccessResponse {
  message: string;
  projectid: string;
}

export interface DeleteProjectTaskRequest {
  projectid: number;
  taskid: number;
}

export interface EndTaskTimerRequest {
  timerid: number;
  projectid?: number;
  adminid?: number;
  end_time?: number;
}

export interface GetProjectRequest {
  projectid: number;
}

export interface GetProjectResponse extends WhmcsResponse {
  result: 'success';
  projectinfo: Record<string, string>;
  tasks: Record<string, string>;
  messages: Record<string, string>;
}

export interface GetProjectsRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  title?: string;
  ticketids?: string;
  invoiceids?: string;
  notes?: string;
  adminid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  lastmodified?: string;
}

export interface GetProjectsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  invoices: unknown[];
}

export interface StartTaskTimerRequest {
  timerid: number;
  projectid: number;
  adminid?: number;
  start_time?: number;
  end_time?: number;
}

export interface UpdateProjectRequest {
  projectid: number;
  adminid?: number;
  userid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  title?: string;
  ticketids?: string;
  invoiceids?: string;
  notes?: string;
}

export interface UpdateProjectTaskRequest {
  taskid: number;
  projectid?: number;
  duedate?: string;
  adminid?: number;
  task?: string;
  notes?: string;
  completed?: boolean;
}
