import type { WhmcsResponse } from './common';

export interface AffiliateActivateRequest {
  userid: number;
}

export interface GetAffiliatesRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  visitors?: number;
  paytype?: '' | 'percentage' | 'fixedamount';
  payamount?: number;
  onetime?: number;
  balance?: number;
  withdrawn?: number;
}

export interface Affiliate {
  id: string;
  date: string;
  clientid: string;
  visitors: string;
  paytype: string;
  payamount: string;
  onetime: string;
  balance: string;
  withdrawn: string;
  created_at: string;
  updated_at: string;
}

export interface GetAffiliatesResponse extends WhmcsResponse {
  result: 'success';
  totalresults: string;
  startnumber: string;
  numreturned: string;
  affiliates: {
    affiliate: Affiliate[];
  };
}
