import type { WhmcsResponse } from './common';

export interface AddBannedIpRequest {
  ip: string;
  reason: string;
  days?: number;
  expires?: string;
}

export interface DecryptPasswordRequest {
  password2: string;
}

export interface DecryptPasswordResponse extends WhmcsResponse {
  result: 'success';
  password: string;
}

export interface EncryptPasswordRequest {
  password2: string;
}

export interface EncryptPasswordResponse extends WhmcsResponse {
  result: 'success';
  password: string;
}

export interface GetActivityLogRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  user?: string;
  description?: string;
  ipaddress?: string;
  date?: string;
}

export interface GetActivityLogResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  activity: {
    entry: Array<{
      id: number;
      userid: number;
      user: string;
      description: string;
      date: string;
      ipaddress: string;
    }>;
  };
}

export interface GetAdminDetailsResponse extends WhmcsResponse {
  result: 'success';
  adminid: number;
  name: string;
  notes: string;
  signature: string;
  allowedpermissions: string;
  departments: string;
  requesttime: string;
  whmcs: {
    version: string;
    build: string;
    releasedate: string;
  };
}

export interface GetAdminUsersRequest {
  roleid?: number;
  email?: string;
  include_disabled?: boolean;
}

export interface GetAdminUsersResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  admins: {
    admin: Array<{
      id: number;
      uuid: string;
      roleid: number;
      username: string;
      firstname: string;
      lastname: string;
      email: string;
      signature: string;
      notes: string;
      template: string;
      language: string;
      disabled: boolean;
      loginattempts: number;
      supportdepts: string;
      role: string;
      created_at: string;
      updated_at: string;
    }>;
  };
}

export interface GetAutomationLogRequest {
  limitstart?: number;
  limitnum?: number;
}

export interface GetAutomationLogResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  log: {
    entry: Array<{
      id: number;
      date: string;
      description: string;
      status: string;
    }>;
  };
}

export interface GetConfigurationValueRequest {
  setting: string;
}

export interface GetConfigurationValueResponse extends WhmcsResponse {
  result: 'success';
  setting: string;
  value: string;
}

export interface GetCurrenciesRequest {
  clientid?: number;
}

export interface GetCurrenciesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  currencies: {
    currency: Array<{
      id: number;
      code: string;
      prefix: string;
      suffix: string;
      format: number;
      rate: string;
      default: boolean;
    }>;
  };
}

export interface GetEmailTemplatesRequest {
  type?: 'general' | 'product' | 'domain' | 'support' | 'admin' | 'affiliate' | 'notification';
  language?: string;
}

export interface GetEmailTemplatesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  emailtemplates: {
    emailtemplate: Array<{
      id: number;
      name: string;
      subject: string;
      message: string;
      fromname: string;
      fromemail: string;
      disabled: boolean;
      custom: boolean;
      type: string;
      language: string;
    }>;
  };
}

export interface GetPaymentMethodsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  paymentmethods: {
    paymentmethod: Array<{
      module: string;
      displayname: string;
      type: string;
    }>;
  };
}

export interface GetStaffOnlineResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  staff: {
    member: Array<{
      adminid: number;
      adminusername: string;
      logintime: string;
      lastvisit: string;
      ipaddress: string;
      sessionid: string;
    }>;
  };
}

export interface GetStatsResponse extends WhmcsResponse {
  result: 'success';
  income_today: number;
  income_thismonth: number;
  income_thisyear: number;
  income_alltime: number;
  orders_pending: number;
  orders_today_total: number;
  orders_today_new: number;
  orders_yesterday_total: number;
  orders_yesterday_new: number;
  orders_thismonth_total: number;
  orders_thismonth_new: number;
  orders_thisyear_total: number;
  orders_thisyear_new: number;
  orders_alltime_total: number;
  orders_alltime_new: number;
  tickets_awaiting_reply: number;
  tickets_flagged: number;
  quotes_valid: number;
  recent_registrations: Array<{
    userid: number;
    firstname: string;
    lastname: string;
    email: string;
    date: string;
  }>;
}

export interface GetToDoItemsRequest {
  limitstart?: number;
  limitnum?: number;
  status?: string;
}

export interface GetToDoItemsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  todoitems: {
    todoitem: Array<{
      id: number;
      date: string;
      title: string;
      description: string;
      admin: string;
      status: string;
      duedate: string;
    }>;
  };
}

export interface GetToDoItemStatusesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  todoitemstatuses: {
    status: Array<{
      title: string;
      color: string;
      sortorder: number;
      default: boolean;
    }>;
  };
}

export interface LogActivityRequest {
  command: string;
  description?: string;
  userid?: number;
  adminid?: number;
}

export interface SendAdminEmailRequest {
  messagename?: string;
  custommessage?: string;
  customsubject?: string;
  type?: 'system' | 'account' | 'support';
  deptid?: number;
  mergefields?: Record<string, unknown>;
}

export interface SendEmailRequest {
  id: number;
  messagename?: string;
  customtype?: string;
  customsubject?: string;
  custommessage?: string;
  customvars?: Record<string, unknown>;
}

export interface SetConfigurationValueRequest {
  setting: string;
  value: string;
}

export interface TriggerNotificationEventRequest {
  notification_identifier: string;
  user_id?: number;
  admin_id?: number;
  service_id?: number;
  domain_id?: number;
  invoice_id?: number;
  quote_id?: number;
  ticket_id?: number;
  message?: string;
  extra_variables?: Record<string, unknown>;
}

export interface UpdateAdminNotesRequest {
  notes: string;
}

export interface UpdateAnnouncementRequest {
  announcementid: number;
  date?: string;
  title?: string;
  announcement?: string;
  published?: boolean;
}

export interface UpdateToDoItemRequest {
  itemid: number;
  adminid?: number;
  date?: string;
  title?: string;
  description?: string;
  status?: string;
  duedate?: string;
}

export interface WhmcsDetailsResponse extends WhmcsResponse {
  result: 'success';
  version: string;
  releasedate: string;
  updatecheckdate: string;
  updateavailable: boolean;
  updateversion?: string;
  updatetype?: string;
  updatebuild?: string;
  updatereleasedate?: string;
  updatedownloadsize?: string;
  updatechangelog?: string;
}
