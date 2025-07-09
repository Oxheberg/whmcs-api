import type { WhmcsResponse, WhmcsSuccessResponse } from './common';

export interface CreateOrUpdateTLDRequest {
  extension: string;
  id_protection?: boolean;
  dns_management?: boolean;
  email_forwarding?: boolean;
  epp_required?: boolean;
  auto_registrar?: string;
  currency_code?: string;
  grace_period_days?: number;
  grace_period_fee?: number;
  redemption_period_fee?: number;
  register?: Record<number, number>;
  renew?: Record<number, number>;
  transfer?: Record<number, number>;
}

export interface CreateOrUpdateTLDResponse extends WhmcsSuccessResponse {
  extension: string;
  pricing: unknown[];
}

export interface DomainGetLockingStatusRequest {
  domainid: number;
}

export interface DomainGetLockingStatusResponse extends WhmcsResponse {
  result: 'success';
  lockstatus: string;
}

export interface DomainGetNameserversRequest {
  domainid: number;
}

export interface DomainGetNameserversResponse extends WhmcsResponse {
  result: 'success';
  ns1: string;
  ns2: string;
  ns3: string;
  ns4: string;
  ns5: string;
}

export interface DomainGetWhoisInfoRequest {
  domainid: number;
}

export interface DomainGetWhoisInfoResponse extends WhmcsResponse {
  result: 'success';
  whois: string;
}

export interface DomainRegisterRequest {
  domainid: number;
  registrar?: string;
}

export interface DomainReleaseRequest {
  domainid: number;
  newtag: string;
}

export interface DomainRenewRequest {
  domainid: number;
  regperiod?: number;
}

export interface DomainRequestEPPRequest {
  domainid: number;
}

export interface DomainToggleIdProtectRequest {
  domainid: number;
  protectenable?: boolean;
}

export interface DomainTransferRequest {
  domainid: number;
  transfersecret?: string;
  registrar?: string;
}

export interface DomainUpdateLockingStatusRequest {
  domainid: number;
  lockstatus?: boolean;
}

export interface DomainUpdateNameserversRequest {
  domainid?: number;
  domain?: string;
  ns1: string;
  ns2: string;
  ns3?: string;
  ns4?: string;
  ns5?: string;
}

export interface DomainUpdateWhoisInfoRequest {
  domainid: number;
  xml?: string;
  firstname?: string;
  lastname?: string;
  companyname?: string;
  email?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  phonenumber?: string;
  fax?: string;
}

export interface DomainWhoisRequest {
  domain: string;
}

export interface DomainWhoisResponse extends WhmcsResponse {
  result: 'success';
  status: string;
  whois: string;
}

export interface GetRegistrarsResponse extends WhmcsResponse {
  result: 'success';
  registrars: {
    registrar: Array<{
      registrar: string;
    }>;
  };
}

export interface GetTLDPricingRequest {
  clientid?: number;
  currencyid?: number;
}

export interface GetTLDPricingResponse extends WhmcsResponse {
  result: 'success';
  currency: {
    id: number;
    code: string;
    prefix: string;
    suffix: string;
    rate: string;
  };
  pricing: Record<
    string,
    {
      categories: string[];
      addons: {
        idprotection: {
          1: string;
          2: string;
          3: string;
          4: string;
          5: string;
          6: string;
          7: string;
          8: string;
          9: string;
          10: string;
        };
      };
      register: Record<string, string>;
      transfer: Record<string, string>;
      renew: Record<string, string>;
    }
  >;
}

export interface UpdateClientDomainRequest {
  domainid: number;
  dnsmanagement?: boolean;
  emailforwarding?: boolean;
  idprotection?: boolean;
  donotrenew?: boolean;
  type?: 'Register' | 'Transfer';
  regdate?: string;
  domain?: string;
  firstpaymentamount?: number;
  recurringamount?: number;
  registrar?: string;
  regperiod?: number;
  paymentmethod?: string;
  subscriptionid?: string;
  status?: 'Pending' | 'Pending Transfer' | 'Active' | 'Expired' | 'Cancelled' | 'Fraud';
  nextduedate?: string;
  nextinvoicedate?: string;
  expirydate?: string;
  reminderdate?: string;
  registrationperiod?: number;
  promoid?: number;
  addons?: string;
  notes?: string;
  autorecalc?: boolean;
}

export interface UpdateClientDomainResponse extends WhmcsResponse {
  result: 'success';
  domainid: number;
}
