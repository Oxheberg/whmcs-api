import type { WhmcsResponse, WhmcsSuccessResponse } from './common';

export interface GetHealthStatusRequest {
  fetchStatus?: boolean;
}

type HealthCheck = {
  name: string;
  type: string;
  severityLevel: string;
  body: string;
};

export interface GetHealthStatusResponse extends WhmcsSuccessResponse {
  checks: {
    success: HealthCheck[];
    warning: HealthCheck[];
    danger: HealthCheck[];
  };
}

export interface GetServersRequest {
  serviceId?: number;
  addonId?: number;
  fetchStatus?: boolean;
}

export interface ServerStatus {
  http: boolean;
  load: string;
  uptime: string;
}

export interface Server {
  id: number;
  name: string;
  hostname: string;
  ipaddress: string;
  active: boolean;
  activeServices: number;
  maxAllowedServices: number;
  percentUsed: number;
  module: string;
  status: ServerStatus;
}

export interface GetServersResponse extends WhmcsResponse {
  result: 'success';
  servers: Server[];
  fetchStatus: string;
}
