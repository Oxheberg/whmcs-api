import type { WhmcsResponse } from './common';

export interface AddClientRequest {
  firstname: string;
  lastname: string;
  email: string;
  address1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phonenumber: string;
  companyname?: string;
  address2?: string;
  currency?: number;
  clientgroup?: number;
  customfields?: Record<string, unknown>;
  language?: string;
  emailpreferences?: string;
  password2?: string;
  securityqid?: number;
  securityqans?: string;
  notes?: string;
  cctype?: string;
  cardnum?: string;
  expdate?: string;
  cvv?: string;
  skipvalidation?: boolean;
  noemail?: boolean;
}

export interface AddClientResponse extends WhmcsResponse {
  result: 'success';
  clientid: number;
}

export interface AddContactRequest {
  clientid: number;
  firstname: string;
  lastname: string;
  email: string;
  address1?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  phonenumber?: string;
  companyname?: string;
  address2?: string;
  subaccount?: boolean;
  password2?: string;
  permissions?: string;
  domainemails?: boolean;
  generalemails?: boolean;
  invoiceemails?: boolean;
  productemails?: boolean;
  supportemails?: boolean;
  affiliateemails?: boolean;
}

export interface AddContactResponse extends WhmcsResponse {
  result: 'success';
  contactid: number;
}

export interface CloseClientRequest {
  clientid: number;
}

export interface DeleteClientRequest {
  clientid: number;
}

export interface DeleteContactRequest {
  contactid: number;
}

export interface GetCancelledPackagesRequest {
  limitstart?: number;
  limitnum?: number;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetCancelledPackagesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  services: {
    service: Array<{
      id: number;
      userid: number;
      orderid: number;
      productid: number;
      serverid: number;
      regdate: string;
      domain: string;
      paymentmethod: string;
      firstpaymentamount: string;
      amount: string;
      billingcycle: string;
      nextduedate: string;
      status: string;
      username: string;
      password: string;
      subscriptionid: string;
      promoid: number;
      overideautosuspend: number;
      overidesuspenduntil: string;
      dedicatedip: string;
      assignedips: string;
      notes: string;
      productname: string;
      groupname: string;
      configoptions: Record<string, unknown>;
      customfields: Record<string, unknown>;
    }>;
  };
}

export interface GetClientGroupsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  clientgroups: {
    group: Array<{
      id: number;
      groupname: string;
      groupcolour: string;
      discountpercent: string;
      susptermexempt: boolean;
      separateinvoices: boolean;
    }>;
  };
}

export interface GetClientPasswordRequest {
  userid: number;
}

export interface GetClientPasswordResponse extends WhmcsResponse {
  result: 'success';
  password: string;
}

export interface GetClientsRequest {
  limitstart?: number;
  limitnum?: number;
  sorting?: 'ASC' | 'DESC';
  orderby?: string;
  search?: string;
  limitend?: number;
}

export interface GetClientsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  clients: {
    client: Array<{
      id: number;
      firstname: string;
      lastname: string;
      fullname: string;
      companyname: string;
      email: string;
      address1: string;
      address2: string;
      city: string;
      fullstate: string;
      state: string;
      postcode: string;
      countrycode: string;
      country: string;
      phonenumber: string;
      password: string;
      statecode: string;
      countryname: string;
      phonecc: string;
      phonenumberformatted: string;
      billingcid: number;
      securityqid: number;
      securityqans: string;
      groupid: number;
      status: string;
      credit: string;
      taxexempt: boolean;
      latefeeoveride: boolean;
      overideduenotices: boolean;
      separateinvoices: boolean;
      disableautocc: boolean;
      datecreated: string;
      notes: string;
      lastlogin: string;
      currency: number;
      defaultgateway: string;
      cctype: string;
      cclastfour: string;
      emailoptout: boolean;
      overrideautoclose: boolean;
      allowsinglereceipt: boolean;
      emailverified: boolean;
      language: string;
      isOptedIntoMarketingEmails: boolean;
      customfields: Record<string, unknown>;
    }>;
  };
}

export interface GetClientsAddonsRequest {
  clientid?: number;
  serviceid?: number;
  addonid?: number;
  limitstart?: number;
  limitnum?: number;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetClientsAddonsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  addons: {
    addon: Array<{
      id: number;
      userid: number;
      orderid: number;
      serviceid: number;
      addonid: number;
      regdate: string;
      name: string;
      setupfee: string;
      recurring: string;
      billingcycle: string;
      nextduedate: string;
      nextinvoicedate: string;
      status: string;
      paymentmethod: string;
      notes: string;
    }>;
  };
}

export interface GetClientsDetailsRequest {
  clientid?: number;
  email?: string;
  stats?: boolean;
}

export interface GetClientsDetailsResponse extends WhmcsResponse {
  result: 'success';
  userid: number;
  client_id: number;
  id: number;
  owner_user_id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  fullname: string;
  companyname: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  fullstate: string;
  state: string;
  postcode: string;
  countrycode: string;
  country: string;
  phonenumber: string;
  tax_id: string;
  email_preferences: {
    general: number;
    invoice: number;
    support: number;
    product: number;
    domain: number;
    affiliate: number;
  };
  statecode: string;
  countryname: string;
  phonecc: string;
  phonenumberformatted: string;
  telephoneNumber: string;
  billingcid: number;
  notes: string;
  currency: number;
  defaultgateway: string;
  cctype: string | null;
  cclastfour: string | null;
  gatewayid: string | null;
  groupid: number;
  status: string;
  credit: string;
  taxexempt: boolean;
  latefeeoveride: boolean;
  overideduenotices: boolean;
  separateinvoices: boolean;
  disableautocc: boolean;
  emailoptout: boolean;
  marketing_emails_opt_in: boolean;
  overrideautoclose: boolean;
  allowSingleSignOn: number;
  email_verified: boolean;
  language: string;
  isOptedInToMarketingEmails: boolean;
  tax_state: string;
  tax_countrycode: string;
  lastlogin: string;
  customfields1: string;
  customfields: Array<{
    id: number;
    value: string;
  }>;
  customfields2: string;
  customfields3: string;
  customfields4: string;
  currency_code: string;
  users: {
    user: Array<{
      id: number;
      name: string;
      email: string;
      is_owner: boolean;
    }>;
  };
  client: {
    userid: number;
    client_id: number;
    id: number;
    owner_user_id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    companyname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    fullstate: string;
    state: string;
    postcode: string;
    countrycode: string;
    country: string;
    phonenumber: string;
    tax_id: string;
    email_preferences: {
      general: number;
      invoice: number;
      support: number;
      product: number;
      domain: number;
      affiliate: number;
    };
    statecode: string;
    countryname: string;
    phonecc: string;
    phonenumberformatted: string;
    telephoneNumber: string;
    billingcid: number;
    notes: string;
    currency: number;
    defaultgateway: string;
    groupid: number;
    status: string;
    credit: string;
    taxexempt: boolean;
    latefeeoveride: boolean;
    overideduenotices: boolean;
    separateinvoices: boolean;
    disableautocc: boolean;
    emailoptout: boolean;
    marketing_emails_opt_in: boolean;
    overrideautoclose: boolean;
    allowSingleSignOn: number;
    email_verified: boolean;
    language: string;
    isOptedInToMarketingEmails: boolean;
    tax_state: string;
    tax_countrycode: string;
    lastlogin: string;
    customfields1: string;
    customfields: Array<{
      id: number;
      value: string;
    }>;
    customfields2: string;
    customfields3: string;
    customfields4: string;
    currency_code: string;
    users: {
      user: Array<{
        id: number;
        name: string;
        email: string;
        is_owner: boolean;
      }>;
    };
  };
  stats: {
    numdueinvoices: number;
    dueinvoicesbalance: string;
    incredit: boolean;
    creditbalance: string;
    grossRevenue: string;
    expenses: string;
    income: string;
    numoverdueinvoices: number;
    overdueinvoicesbalance: string;
    numDraftInvoices: number;
    draftInvoicesBalance: string;
    numunpaidinvoices: number;
    unpaidinvoicesamount: string;
    numpaidinvoices: number;
    paidinvoicesamount: string;
    numcancelledinvoices: number;
    cancelledinvoicesamount: string;
    numrefundedinvoices: number;
    refundedinvoicesamount: string;
    numcollectionsinvoices: number;
    collectionsinvoicesamount: string;
    numpaymentpendinginvoices: number;
    paymentpendinginvoicesamount: string;
    productsnumactivehosting: number;
    productsnumhosting: number;
    productsnumactivereseller: number;
    productsnumreseller: number;
    productsnumactiveservers: number;
    productsnumservers: number;
    productsnumactiveother: number;
    productsnumother: number;
    productsnumactive: number;
    productsnumtotal: number;
    numactivedomains: number;
    numdomains: number;
    numacceptedquotes: number;
    numquotes: number;
    numtickets: number;
    numactivetickets: number;
    numaffiliatesignups: number;
    isAffiliate: boolean;
  };
}

export interface GetClientsDetailsCleanResponse extends WhmcsResponse {
  result: 'success';
  client: {
    id: number;
    owner_user_id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    companyname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    countrycode: string;
    country: string;
    phonenumber: string;
    tax_id: string;
    email_preferences: {
      general: boolean;
      invoice: boolean;
      support: boolean;
      product: boolean;
      domain: boolean;
      affiliate: boolean;
    };
    countryname: string;
    phonecc: string;
    phonenumberformatted: string;
    billingcid: number;
    notes: string;
    currency: number;
    currency_code: string;
    defaultgateway: string;
    groupid: number;
    status: string;
    credit: string;
    taxexempt: boolean;
    latefeeoveride: boolean;
    overideduenotices: boolean;
    separateinvoices: boolean;
    disableautocc: boolean;
    emailoptout: boolean;
    marketing_emails_opt_in: boolean;
    overrideautoclose: boolean;
    allowSingleSignOn: boolean;
    email_verified: boolean;
    language: string;
    tax_state: string;
    tax_countrycode: string;
    lastlogin: string;
    customfields: Array<{
      id: number;
      value: string;
    }>;
  };
  users: Array<{
    id: number;
    name: string;
    email: string;
    is_owner: boolean;
  }>;
  stats: {
    numdueinvoices: number;
    dueinvoicesbalance: string;
    incredit: boolean;
    creditbalance: string;
    grossRevenue: string;
    expenses: string;
    income: string;
    numoverdueinvoices: number;
    overdueinvoicesbalance: string;
    numDraftInvoices: number;
    draftInvoicesBalance: string;
    numunpaidinvoices: number;
    unpaidinvoicesamount: string;
    numpaidinvoices: number;
    paidinvoicesamount: string;
    numcancelledinvoices: number;
    cancelledinvoicesamount: string;
    numrefundedinvoices: number;
    refundedinvoicesamount: string;
    numcollectionsinvoices: number;
    collectionsinvoicesamount: string;
    numpaymentpendinginvoices: number;
    paymentpendinginvoicesamount: string;
    productsnumactivehosting: number;
    productsnumhosting: number;
    productsnumactivereseller: number;
    productsnumreseller: number;
    productsnumactiveservers: number;
    productsnumservers: number;
    productsnumactiveother: number;
    productsnumother: number;
    productsnumactive: number;
    productsnumtotal: number;
    numactivedomains: number;
    numdomains: number;
    numacceptedquotes: number;
    numquotes: number;
    numtickets: number;
    numactivetickets: number;
    numaffiliatesignups: number;
    isAffiliate: boolean;
  };
}

export interface GetClientsDomainsRequest {
  clientid?: number;
  domainid?: number;
  limitstart?: number;
  limitnum?: number;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetClientsDomainsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  domains: {
    domain: Array<{
      id: number;
      userid: number;
      orderid: number;
      regtype: string;
      domainname: string;
      registrar: string;
      regperiod: number;
      paymentmethod: string;
      firstpaymentamount: string;
      recurringamount: string;
      registrationdate: string;
      expirydate: string;
      nextduedate: string;
      status: string;
      subscriptionid: string;
      promoid: number;
      dnsmanagement: boolean;
      emailforwarding: boolean;
      idprotection: boolean;
      donotrenew: boolean;
      notes: string;
    }>;
  };
}

export interface GetClientsProductsRequest {
  clientid?: number;
  serviceid?: number;
  pid?: number;
  domain?: string;
  limitstart?: number;
  limitnum?: number;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetClientsProductsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  products: {
    product: Array<{
      id: number;
      clientid: number;
      orderid: number;
      pid: number;
      regdate: string;
      name: string;
      translated_name: string;
      groupname: string;
      translated_groupname: string;
      domain: string;
      dedicatedip: string;
      serverid: number;
      servername: string;
      serverip: string;
      serverhostname: string;
      suspendreason: string;
      firstpaymentamount: string;
      recurringamount: string;
      paymentmethod: string;
      paymentmethodname: string;
      billingcycle: string;
      nextduedate: string;
      status: string;
      username: string;
      password: string;
      subscriptionid: string;
      promoid: number;
      overideautosuspend: number;
      overidesuspenduntil: string;
      ns1: string;
      ns2: string;
      assignedips: string;
      notes: string;
      diskusage: number;
      disklimit: number;
      bwusage: number;
      bwlimit: number;
      lastupdate: string;
      customfields: Record<string, unknown>;
      configoptions: Record<string, unknown>;
    }>;
  };
}

export interface GetContactsRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  firstname?: string;
  lastname?: string;
  companyname?: string;
  email?: string;
  address1?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  phonenumber?: string;
  subaccount?: boolean;
}

export interface GetContactsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  contacts: {
    contact: Array<{
      id: number;
      userid: number;
      firstname: string;
      lastname: string;
      companyname: string;
      email: string;
      address1: string;
      address2: string;
      city: string;
      state: string;
      postcode: string;
      country: string;
      phonenumber: string;
      subaccount: boolean;
      password: string;
      permissions: string;
      domainemails: boolean;
      generalemails: boolean;
      invoiceemails: boolean;
      productemails: boolean;
      supportemails: boolean;
      affiliateemails: boolean;
      created_at: string;
      updated_at: string;
    }>;
  };
}

export interface GetEmailsRequest {
  clientid?: number;
  limitstart?: number;
  limitnum?: number;
  date?: string;
  subject?: string;
}

export interface GetEmailsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  emails: {
    email: Array<{
      id: number;
      userid: number;
      subject: string;
      message: string;
      date: string;
      to: string;
      cc: string;
      bcc: string;
      pending: boolean;
      failed: boolean;
    }>;
  };
}

export interface UpdateClientRequest {
  clientid: number;
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
  password2?: string;
  credit?: number;
  taxexempt?: boolean;
  latefeeoveride?: boolean;
  overideduenotices?: boolean;
  separateinvoices?: boolean;
  disableautocc?: boolean;
  emailoptout?: boolean;
  overrideautoclose?: boolean;
  allowsinglereceipt?: boolean;
  status?: 'Active' | 'Inactive' | 'Closed';
  clientgroup?: number;
  customfields?: Record<string, unknown>;
  language?: string;
  currency?: number;
  notes?: string;
  cctype?: string;
  cardnum?: string;
  expdate?: string;
  cvv?: string;
  gatewayid?: string;
  clearcreditcard?: boolean;
  skipvalidation?: boolean;
}

export interface UpdateContactRequest {
  contactid: number;
  generalemails?: boolean;
  productemails?: boolean;
  domainemails?: boolean;
  invoiceemails?: boolean;
  supportemails?: boolean;
  affiliateemails?: boolean;
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
  subaccount?: boolean;
  password2?: string;
  permissions?: string;
}
