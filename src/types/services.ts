import type { WhmcsSuccessResponse } from './common';

export interface ModuleChangePackageRequest {
  serviceid: number;
}

export interface ModuleChangePwRequest {
  serviceid: number;
  servicepassword?: string;
}

export interface ModuleCreateRequest {
  serviceid: number;
}

export interface ModuleCustomRequest {
  serviceid: number;
  func_name: string;
}

export interface ModuleSuspendRequest {
  serviceid: number;
  suspendreason?: string;
}

export interface ModuleTerminateRequest {
  serviceid: number;
}

export interface ModuleUnsuspendRequest {
  serviceid: number;
}

export interface UpdateClientProductRequest {
  serviceid: number;
  pid?: number;
  serverid?: number;
  regdate?: string;
  nextduedate?: string;
  terminationdate?: string;
  domain?: string;
  firstpaymentamount?: number;
  recurringamount?: number;
  paymentmethod?: string;
  billingcycle?: string;
  subscriptionid?: string;
  status?: string;
  notes?: string;
  serviceusername?: string;
  servicepassword?: string;
  overideautosuspend?: string;
  overidesuspenduntil?: string;
  ns1?: string;
  ns2?: string;
  dedicatedip?: string;
  assignedips?: string;
  diskusage?: number;
  disklimit?: number;
  bwusage?: number;
  bwlimit?: number;
  suspendreason?: string;
  promoid?: number;
  unset?: string[];
  autorecalc?: boolean;
  customfields?: string;
  configoptions?: string;
}

export interface UpdateClientProductResponse extends WhmcsSuccessResponse {
  serviceid: number;
}

export interface UpgradeProductRequest {
  serviceid: number;
  calconly?: boolean;
  paymentmethod: string;
  type: 'product' | 'configoptions';
  newproductid?: number;
  newproductbillingcycle?: string;
  promocode?: string;
  configoptions?: Record<number, number>;
}

export interface UpgradeProductResponse extends WhmcsSuccessResponse {
  oldproductid: string;
  oldproductname: string;
  newproductid: number;
  newproductname: string;
  daysuntilrenewal: number;
  totaldays: number;
  newproductbillingcycle: string;
  price: string;
  id: string;
  orderid: number;
  order_number: string;
  invoiceid: number | null;
  upgradeinprogress?: boolean;
}
