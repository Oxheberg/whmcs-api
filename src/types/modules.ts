import type { WhmcsResponse } from './common';

export interface ActivateModuleRequest {
  moduleType: string;
  moduleName: string;
  parameters?: Record<string, string>;
}

export interface DeactivateModuleRequest {
  moduleType: string;
  moduleName: string;
  newGateway?: string;
}

export interface GetModuleConfigurationParametersRequest {
  moduleType: string;
  moduleName: string;
}

export interface ModuleParameter {
  name: string;
  displayName: string;
  fieldType: string;
}

export interface GetModuleConfigurationParametersResponse extends WhmcsResponse {
  result: 'success';
  parameters: ModuleParameter[];
}

export interface GetModuleQueueRequest {
  relatedId?: number;
  serviceType?: 'domain' | 'service' | 'addon' | '';
  moduleName?: string;
  moduleAction?: string;
  since?: string;
}

export interface QueueItem {
  id: string;
  serviceType: string;
  serviceId: string;
  moduleName: string;
  moduleAction: string;
  lastAttempt: string;
  lastAttemptError: string;
  numRetries: string;
  completed: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetModuleQueueResponse extends WhmcsResponse {
  result: 'success';
  count: string;
  queue: QueueItem[];
}

export interface UpdateModuleConfigurationRequest {
  moduleType: string;
  moduleName: string;
  parameters?: Record<string, string>;
}
