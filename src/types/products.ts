import type { WhmcsSuccessResponse } from './common';

export interface AddProductRequest {
  name: string;
  gid: number;
  slug?: string;
  type?: 'hostingaccount' | 'reselleraccount' | 'server' | 'other';
  stockcontrol?: boolean;
  qty?: number;
  paytype?: 'free' | 'onetime' | 'recurring';
  hidden?: boolean;
  showdomainoptions?: boolean;
  tax?: boolean;
  isFeatured?: boolean;
  proratabilling?: boolean;
  description?: string;
  shortdescription?: string;
  tagline?: string;
  color?: string;
  welcomeemail?: number;
  proratadate?: number;
  proratachargenextmonth?: number;
  subdomain?: string;
  autosetup?: '' | 'on' | 'payment' | 'order';
  module?: string;
  servergroupid?: number;
  configoption1?: unknown;
  configoption2?: unknown;
  configoption3?: unknown;
  configoption4?: unknown;
  configoption5?: unknown;
  configoption6?: unknown;
  order?: number;
  pricing?: Record<number, Record<string, number>>;
  recommendations?: Array<{ id: number; order: number }>;
  ondemandrenewalconfigurationoverride?: boolean;
  ondemandrenewalsenabled?: boolean;
  ondemandrenewalperiodmonthly?: number;
  ondemandrenewalperiodquarterly?: number;
  ondemandrenewalperiodsemiannually?: number;
  ondemandrenewalperiodannually?: number;
  ondemandrenewalperiodbiennially?: number;
  ondemandrenewalperiodtriennially?: number;
}

export interface AddProductResponse extends WhmcsSuccessResponse {
  pid: number;
}
