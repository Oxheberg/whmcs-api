import type { WhmcsResponse } from './common';

export interface AddAnnouncementRequest {
  date: string;
  title: string;
  announcement: string;
  published?: boolean;
}

export interface AddCancelRequestRequest {
  serviceid: number;
  type?: 'immediate' | 'end_of_billing_period';
  reason?: string;
}

export interface AddClientNoteRequest {
  userid: number;
  notes: string;
  sticky?: boolean;
}

export interface AddTicketNoteRequest {
  ticketid?: number;
  ticketnum?: string;
  message: string;
  markdown?: boolean;
  attachments?: Array<{
    name: string;
    data: string;
  }>;
  created?: string;
}

export interface AddTicketReplyRequest {
  ticketid: number;
  message: string;
  markdown?: boolean;
  clientid?: number;
  contactid?: number;
  adminusername?: string;
  name?: string;
  email?: string;
  status?: string;
  noemail?: boolean;
  customfields?: string;
  attachments?: Array<{
    name: string;
    data: string;
  }>;
  created?: string;
}

export interface BlockTicketSenderRequest {
  email: string;
}

export interface DeleteAnnouncementRequest {
  announcementid: number;
}

export interface DeleteTicketRequest {
  ticketid: number;
}

export interface DeleteTicketNoteRequest {
  noteid: number;
}

export interface DeleteTicketReplyRequest {
  ticketid: number;
  replyid: number;
}

export interface GetAnnouncementsRequest {
  limitstart?: number;
  limitnum?: number;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetAnnouncementsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  announcements: {
    announcement: Array<{
      id: number;
      date: string;
      title: string;
      announcement: string;
      published: boolean;
    }>;
  };
}

export interface MergeTicketRequest {
  ticketid: number;
  mergeticketid: number;
}

export interface OpenTicketRequest {
  deptid?: number;
  subject: string;
  message: string;
  clientid?: number;
  contactid?: number;
  name?: string;
  email?: string;
  priority?: 'Low' | 'Medium' | 'High';
  serviceid?: number;
  customfields?: Record<string, unknown>;
  attachments?: Array<{
    name: string;
    data: string;
  }>;
  markdown?: boolean;
  useMarkdown?: boolean;
  noemail?: boolean;
  noapiclientnotification?: boolean;
}

export interface OpenTicketResponse extends WhmcsResponse {
  result: 'success';
  id: number;
  tid: string;
  c: string;
}

export interface UpdateTicketRequest {
  ticketid: number;
  deptid?: number;
  userid?: number;
  name?: string;
  email?: string;
  cc?: string;
  subject?: string;
  priority?: 'Low' | 'Medium' | 'High';
  status?: string;
  serviceid?: number;
  flag?: number;
  removeFlag?: boolean;
}

export interface UpdateTicketReplyRequest {
  ticketid: number;
  replyid: number;
  message: string;
}
