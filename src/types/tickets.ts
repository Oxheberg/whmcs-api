import type { WhmcsResponse } from './common';

export interface GetSupportDepartmentsRequest {
  ignoreempty?: boolean;
}

export interface GetSupportDepartmentsResponse extends WhmcsResponse {
  result: 'success';
  departments: {
    department: Array<{
      id: string;
      name: string;
      awaitingreply: string;
      opentickets: string;
    }>;
  };
}

export interface GetSupportStatusesResponse extends WhmcsResponse {
  result: 'success';
  statuses: {
    status: Array<{
      title: string;
      color: string;
      showcount: boolean;
      sortorder: string;
    }>;
  };
}

export interface GetTicketRequest {
  ticketnum?: string;
  ticketid?: number;
  repliessort?: 'ASC' | 'DESC';
}

export interface GetTicketResponse extends WhmcsResponse {
  result: 'success';
  id: string;
  tid: string;
  c: string;
  deptid: string;
  deptname: string;
  userid: string;
  contactid: string;
  name: string;
  email: string;
  cc: string;
  date: string;
  subject: string;
  status: string;
  priority: string;
  admin: string;
  attachment: string;
  lastreply: string;
  flag: string;
  service: string;
  replies: unknown[];
  notes: unknown[];
}

export interface GetTicketAttachmentRequest {
  ticketid: number;
  attachmentid: number;
}

export interface GetTicketAttachmentResponse extends WhmcsResponse {
  result: 'success';
  filename: string;
  data: string;
}

export interface GetTicketCountsRequest {
  deptid?: number;
  status?: string;
  ignoreDeptAssignments?: boolean;
}

export interface GetTicketCountsResponse extends WhmcsResponse {
  result: 'success';
  allactive: {
    count: number;
  };
  awaitingreply: {
    count: number;
  };
  flaggedtickets: {
    count: number;
  };
}

export interface GetTicketNotesRequest {
  ticketid: number;
}

export interface GetTicketNotesResponse extends WhmcsResponse {
  result: 'success';
  notes: {
    note: Array<{
      id: string;
      admin: string;
      created: string;
      message: string;
      attachments: unknown[];
    }>;
  };
}

export interface GetTicketPredefinedCatsResponse extends WhmcsResponse {
  result: 'success';
  categories: {
    category: Array<{
      id: string;
      parentid: string;
      name: string;
    }>;
  };
}

export interface GetTicketPredefinedRepliesRequest {
  catid?: number;
}

export interface GetTicketPredefinedRepliesResponse extends WhmcsResponse {
  result: 'success';
  predefinedreplies: {
    predefinedreply: Array<{
      id: string;
      name: string;
      reply: string;
    }>;
  };
}

export interface GetTicketsRequest {
  limitstart?: number;
  limitnum?: number;
  deptid?: number;
  clientid?: number;
  email?: string;
  status?: string;
  subject?: string;
  ignore_dept_assignments?: boolean;
}

export interface GetTicketsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: string;
  startnumber: number;
  numreturned: number;
  tickets: {
    ticket: Array<{
      id: string;
      tid: string;
      deptid: string;
      userid: string;
      name: string;
      owner_name: string;
      email: string;
      requestor_name: string;
      requestor_email: string;
      requestor_type: string;
      cc: string;
      c: string;
      date: string;
      subject: string;
      status: string;
      priority: string;
      admin: string;
      attachment: string;
      attachments: Array<{
        filename: string;
        index: number;
      }>;
      attachments_removed: boolean;
      lastreply: string;
      flag: string;
      service: string;
    }>;
  };
}
