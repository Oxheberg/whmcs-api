import type { WhmcsResponse } from './common';

export interface AcceptQuoteRequest {
  quoteid: number;
}

export interface AddBillableItemRequest {
  clientid: number;
  description: string;
  amount: number;
  invoiceaction?: '1' | 'nextcron' | 'nextinvoice' | 'duedate' | 'recur';
  recur?: number;
  recurcycle?: 'Days' | 'Weeks' | 'Months' | 'Years';
  recurfor?: number;
  duedate?: string;
  hours?: number;
}

export interface AddCreditRequest {
  clientid: number;
  description: string;
  amount: number;
  date?: string;
  adminid?: number;
  type?: 'add' | 'remove';
}

export interface AddCreditResponse extends WhmcsResponse {
  result: 'success';
  newbalance: number;
}

export interface AddInvoicePaymentRequest {
  invoiceid: number;
  transid: string;
  gateway: string;
  date: string;
  amount?: number;
  fees?: number;
  noemail?: boolean;
}

export interface AddPayMethodRequest {
  clientid: number;
  type: string;
  description?: string;
  bank_name?: string;
  bank_type?: string;
  bank_code?: string;
  account_type?: string;
  account_number?: string;
  routing_number?: string;
  bank_account_type?: string;
  set_as_default?: boolean;
}

export interface AddTransactionRequest {
  userid?: number;
  currency?: number;
  gateway: string;
  date: string;
  description: string;
  amountin?: number;
  fees?: number;
  amountout?: number;
  rate?: number;
  transid?: string;
  invoiceid?: number;
  refundid?: number;
}

export interface ApplyCreditRequest {
  invoiceid: number;
  amount?: number | string;
  noemail?: boolean;
}

export interface ApplyCreditResponse extends WhmcsResponse {
  result: 'success';
  invoiceid: number;
  amount: number;
  invoicepaid: string;
}

export interface CapturePaymentRequest {
  invoiceid: number;
}

export interface CreateInvoiceRequest {
  userid: number;
  date?: string;
  duedate?: string;
  taxrate?: number;
  taxrate2?: number;
  sendinvoice?: boolean;
  paymentmethod?: string;
  notes?: string;
  itemdescription1?: string;
  itemamount1?: number;
  itemtaxed1?: boolean;
  itemdescription2?: string;
  itemamount2?: number;
  itemtaxed2?: boolean;
  itemdescription3?: string;
  itemamount3?: number;
  itemtaxed3?: boolean;
  itemdescription4?: string;
  itemamount4?: number;
  itemtaxed4?: boolean;
  itemdescription5?: string;
  itemamount5?: number;
  itemtaxed5?: boolean;
  itemdescription6?: string;
  itemamount6?: number;
  itemtaxed6?: boolean;
  itemdescription7?: string;
  itemamount7?: number;
  itemtaxed7?: boolean;
  itemdescription8?: string;
  itemamount8?: number;
  itemtaxed8?: boolean;
  itemdescription9?: string;
  itemamount9?: number;
  itemtaxed9?: boolean;
  itemdescription10?: string;
  itemamount10?: number;
  itemtaxed10?: boolean;
  autoapplycredit?: boolean;
}

export interface CreateInvoiceResponse extends WhmcsResponse {
  result: 'success';
  invoiceid: number;
}

export interface CreateQuoteRequest {
  userid: number;
  subject: string;
  stage: string;
  validuntil: string;
  currency?: number;
  proposal?: string;
  customernotes?: string;
  adminnotes?: string;
  lineitems: Array<{
    description: string;
    qty: number;
    up: number;
    discount?: number;
    taxable?: boolean;
  }>;
}

export interface CreateQuoteResponse extends WhmcsResponse {
  result: 'success';
  quoteid: number;
}

export interface DeletePayMethodRequest {
  paymethodid: number;
}

export interface DeleteQuoteRequest {
  quoteid: number;
}

export interface GenInvoicesRequest {
  noemail?: boolean;
  serviceids?: string;
  clientid?: number;
}

export interface GenInvoicesResponse extends WhmcsResponse {
  result: 'success';
  numcreated: number;
}

export interface GetCreditsRequest {
  clientid?: number;
  limitstart?: number;
  limitnum?: number;
}

export interface GetCreditsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  credits: {
    credit: Array<{
      id: number;
      clientid: number;
      date: string;
      description: string;
      amount: number;
      relid: number;
      adminid: number;
    }>;
  };
}

export interface GetInvoiceRequest {
  invoiceid: number;
}

export interface GetInvoiceResponse extends WhmcsResponse {
  result: 'success';
  invoiceid: number;
  invoicenum: string;
  userid: number;
  date: string;
  duedate: string;
  datepaid: string;
  lastcaptureattempt: string;
  subtotal: string;
  credit: string;
  tax: string;
  tax2: string;
  total: string;
  balance: string;
  taxrate: string;
  taxrate2: string;
  status: string;
  paymentmethod: string;
  notes: string;
  ccgateway: boolean;
  items: {
    item: Array<{
      id: number;
      type: string;
      relid: number;
      description: string;
      amount: string;
      taxed: number;
    }>;
  };
  transactions: unknown;
}

export interface GetInvoicesRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  status?: string;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetInvoicesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  invoices: {
    invoice: Array<{
      id: number;
      userid: number;
      firstname: string;
      lastname: string;
      companyname: string;
      invoicenum: string;
      date: string;
      duedate: string;
      datepaid: string;
      last_capture_attempt: string;
      date_refunded: string;
      date_cancelled: string;
      subtotal: string;
      credit: string;
      tax: string;
      tax2: string;
      total: string;
      taxrate: string;
      taxrate2: string;
      status: string;
      paymentmethod: string;
      paymethodid?: number;
      notes: string;
      created_at: string;
      updated_at: string;
      currencycode: string;
      currencyprefix: string;
      currencysuffix: string;
    }>;
  };
}

export interface GetPayMethodsRequest {
  clientid: number;
}

export interface GetPayMethodsResponse extends WhmcsResponse {
  result: 'success';
  paymethods: {
    paymethod: Array<{
      id: number;
      payment_type: string;
      description: string;
      is_default: boolean;
    }>;
  };
}

export interface GetQuotesRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  subject?: string;
  stage?: string;
  datecreated?: string;
  lastmodified?: string;
  validuntil?: string;
  orderby?: string;
  order?: 'ASC' | 'DESC';
}

export interface GetQuotesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  quotes: {
    quote: Array<{
      id: number;
      userid: number;
      subject: string;
      stage: string;
      datecreated: string;
      lastmodified: string;
      validuntil: string;
      currency: number;
      proposal: string;
      customernotes: string;
      adminnotes: string;
      totals: {
        subtotal: number;
        tax1: number;
        tax2: number;
        total: number;
      };
    }>;
  };
}

export interface GetTransactionsRequest {
  clientid?: number;
  invoiceid?: number;
  transid?: string;
  type?: string;
  limitstart?: number;
  limitnum?: number;
}

export interface GetTransactionsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  transactions: {
    transaction: Array<{
      id: number;
      userid: number;
      currency: number;
      gateway: string;
      date: string;
      description: string;
      amountin: string;
      fees: string;
      amountout: string;
      rate: string;
      transid: string;
      invoiceid: number;
      refundid: number;
    }>;
  };
}

export interface SendQuoteRequest {
  quoteid: number;
}

export interface UpdateInvoiceRequest {
  invoiceid: number;
  itemdescription?: string[];
  itemamount?: number[];
  itemtaxed?: boolean[];
  newitemdescription?: string[];
  newitemamount?: number[];
  newitemtaxed?: boolean[];
  deletelineids?: number[];
  date?: string;
  duedate?: string;
  notes?: string;
  paymentmethod?: string;
  taxrate?: number;
  taxrate2?: number;
  credit?: number;
  publish?: boolean;
  publishandsendemail?: boolean;
}

export interface UpdatePayMethodRequest {
  paymethodid: number;
  description?: string;
  bank_name?: string;
  bank_type?: string;
  bank_code?: string;
  account_type?: string;
  account_number?: string;
  routing_number?: string;
  bank_account_type?: string;
  set_as_default?: boolean;
}

export interface UpdateQuoteRequest {
  quoteid: number;
  subject?: string;
  stage?: string;
  validuntil?: string;
  currency?: number;
  proposal?: string;
  customernotes?: string;
  adminnotes?: string;
  lineitems?: Array<{
    id?: number;
    description?: string;
    qty?: number;
    up?: number;
    discount?: number;
    taxable?: boolean;
  }>;
}

export interface UpdateTransactionRequest {
  transactionid: number;
  transid?: string;
  date?: string;
  gateway?: string;
  description?: string;
  amountin?: number;
  amountout?: number;
  fees?: number;
  rate?: number;
  credit?: boolean;
  allowcredit?: boolean;
}
