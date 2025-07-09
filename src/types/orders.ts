import type { WhmcsResponse } from './common';

export interface AcceptOrderRequest {
  orderid: number;
  serverid?: number;
  serviceusername?: string;
  servicepassword?: string;
  registrar?: string;
  sendregistrar?: boolean;
  autosetup?: boolean;
  sendemail?: boolean;
}

export interface AddOrderRequest {
  clientid: number;
  productid: number;
  paymentmethod: string;
  domain?: string;
  billingcycle?: string;
  domaintype?: string;
  regperiod?: number;
  eppcode?: string;
  nameserver1?: string;
  nameserver2?: string;
  nameserver3?: string;
  nameserver4?: string;
  nameserver5?: string;
  customfields?: Record<string, unknown>;
  configoptions?: Record<string, unknown>;
  priceoverride?: number;
  promocode?: string;
  affid?: number;
  noinvoice?: boolean;
  noemail?: boolean;
  addons?: string;
  hostname?: string;
  ns1prefix?: string;
  ns2prefix?: string;
  rootpw?: string;
  contactid?: number;
  dnsmanagement?: boolean;
  domainfields?: Record<string, unknown>;
  emailforwarding?: boolean;
  idprotection?: boolean;
  domainpriceoverride?: number;
  domainrenewoverride?: number;
  domainrenewals?: Record<string, unknown>;
  clientip?: string;
}

export interface AddOrderResponse extends WhmcsResponse {
  result: 'success';
  orderid: number;
  productids: string;
  addonids: string;
  domainids: string;
  invoiceid?: number;
}

export interface CancelOrderRequest {
  orderid: number;
  cancelsub?: boolean;
  noemail?: boolean;
}

export interface DeleteOrderRequest {
  orderid: number;
}

export interface FraudOrderRequest {
  orderid: number;
  cancelsub?: boolean;
}

export interface GetOrdersRequest {
  limitstart?: number;
  limitnum?: number;
  clientid?: number;
  requestor_id?: number;
  status?: string;
}

export interface GetOrdersResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  orders: {
    order: Array<{
      id: number;
      ordernum?: string;
      userid: number;
      contactid: number;
      requestor_id: number;
      admin_requestor_id: number;
      date: string;
      nameservers: string;
      transfersecret: string;
      renewals: string;
      promocode: string;
      promotype: string;
      promovalue: string;
      orderdata: string;
      amount: string;
      paymentmethod: string;
      invoiceid: number;
      status: string;
      ipaddress: string;
      fraudmodule: string;
      fraudoutput: string;
      notes: string;
    }>;
  };
}

export interface GetOrderStatusesResponse extends WhmcsResponse {
  result: 'success';
  statuses: {
    status: Array<{
      title: string;
      color: string;
      showpending: boolean;
      showactive: boolean;
      showcancelled: boolean;
      sortorder: number;
    }>;
  };
}

export interface GetProductsRequest {
  pid?: number;
  gid?: number;
  module?: string;
}

export interface GetProductsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  startnumber: number;
  numreturned: number;
  products: {
    product: Array<{
      pid: number;
      gid: number;
      type: string;
      name: string;
      description: string;
      module: string;
      paytype: string;
      pricing: Record<string, unknown>;
      customfields: Record<string, unknown>;
      configoptions: Record<string, unknown>;
    }>;
  };
}

export interface GetPromotionsRequest {
  code?: string;
}

export interface GetPromotionsResponse extends WhmcsResponse {
  result: 'success';
  totalresults: number;
  promotions: {
    promotion: Array<{
      id: number;
      code: string;
      type: string;
      recurring: number;
      value: number;
      cycles: string;
      appliesto: string;
      requires: string;
      requiresexisting: number;
      startdate: string;
      expirationdate: string;
      maxuses: number;
      uses: number;
      lifetimepromo: number;
      applyonce: number;
      newsignups: number;
      existingclient: number;
      onceperclient: number;
      recurfor: number;
      upgrades: number;
      upgradeconfig: string;
      notes: string;
    }>;
  };
}

export interface OrderFraudCheckRequest {
  orderid: number;
}

export interface OrderFraudCheckResponse extends WhmcsResponse {
  result: 'success';
  module: string;
  results: string;
}

export interface PendingOrderRequest {
  orderid: number;
}
