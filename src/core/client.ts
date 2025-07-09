import {
  createAddonsModule,
  createAffiliatesModule,
  createAuthenticationModule,
  createBillingModule,
  createClientModule,
  createDomainsModule,
  createModulesModule,
  createOrdersModule,
  createProductsModule,
  createProjectManagementModule,
  createServersModule,
  createServicesModule,
  createSupportModule,
  createSystemModule,
  createTicketsModule,
  createUsersModule,
} from '../modules';
import type { WhmcsClientOptions, WhmcsErrorResponse, WhmcsResponse } from '../types/common';
import { WhmcsApiError, WhmcsNetworkError } from './errors';

export class WhmcsClient {
  public readonly addons: ReturnType<typeof createAddonsModule>;
  public readonly affiliates: ReturnType<typeof createAffiliatesModule>;
  public readonly authentication: ReturnType<typeof createAuthenticationModule>;
  public readonly billing: ReturnType<typeof createBillingModule>;
  public readonly client: ReturnType<typeof createClientModule>;
  public readonly domains: ReturnType<typeof createDomainsModule>;
  public readonly modules: ReturnType<typeof createModulesModule>;
  public readonly orders: ReturnType<typeof createOrdersModule>;
  public readonly products: ReturnType<typeof createProductsModule>;
  public readonly projectManagement: ReturnType<typeof createProjectManagementModule>;
  public readonly servers: ReturnType<typeof createServersModule>;
  public readonly services: ReturnType<typeof createServicesModule>;
  public readonly support: ReturnType<typeof createSupportModule>;
  public readonly system: ReturnType<typeof createSystemModule>;
  public readonly tickets: ReturnType<typeof createTicketsModule>;
  public readonly users: ReturnType<typeof createUsersModule>;

  constructor(private config: WhmcsClientOptions) {
    this.addons = createAddonsModule(this.call);
    this.affiliates = createAffiliatesModule(this.call);
    this.authentication = createAuthenticationModule(this.call);
    this.billing = createBillingModule(this.call);
    this.client = createClientModule(this.call);
    this.domains = createDomainsModule(this.call);
    this.modules = createModulesModule(this.call);
    this.orders = createOrdersModule(this.call);
    this.products = createProductsModule(this.call);
    this.projectManagement = createProjectManagementModule(this.call);
    this.servers = createServersModule(this.call);
    this.services = createServicesModule(this.call);
    this.support = createSupportModule(this.call);
    this.system = createSystemModule(this.call);
    this.tickets = createTicketsModule(this.call);
    this.users = createUsersModule(this.call);
  }

  private call = async <T extends WhmcsResponse>(action: string, params: object = {}): Promise<T> => {
    const formData = this.buildFormData(action, params);

    try {
      const data = await this.makeRequest(formData);

      if (data.result === 'error') {
        throw new WhmcsApiError(data as WhmcsErrorResponse);
      }

      return data as T;
    } catch (error) {
      if (error instanceof WhmcsApiError || error instanceof WhmcsNetworkError) {
        throw error;
      }
      throw new WhmcsNetworkError(error instanceof Error ? error.message : 'Unknown network error');
    }
  };

  private buildFormData(action: string, params: object): FormData {
    const formData = new FormData();

    formData.append('action', action);
    formData.append('username', this.config.identifier);
    formData.append('password', this.config.secret);
    formData.append('responsetype', 'json');

    if (this.config.accesskey) {
      formData.append('accesskey', this.config.accesskey);
    }

    Object.entries(params as Record<string, unknown>).forEach(([key, value]: [string, unknown]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    return formData;
  }

  private async makeRequest(formData: FormData): Promise<WhmcsResponse> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.timeout ?? 30000);

    try {
      const response = await fetch(this.config.url, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      const responseText = await response.text();

      if (!response.ok) {
        try {
          const errorData = JSON.parse(responseText) as WhmcsErrorResponse;
          if (errorData?.message) {
            throw new WhmcsApiError(errorData);
          }
        } catch (error) {
          if (error instanceof WhmcsApiError) {
            throw error;
          }
          if (responseText && responseText.length < 500) {
            throw new WhmcsNetworkError(`HTTP ${response.status}: ${responseText.trim()}`);
          }
        }

        throw new WhmcsNetworkError(`HTTP ${response.status}: ${response.statusText}`);
      }

      try {
        return JSON.parse(responseText) as WhmcsResponse;
      } catch {
        throw new WhmcsNetworkError(`Invalid response format: ${responseText.substring(0, 200)}`);
      }
    } finally {
      clearTimeout(timeout);
    }
  }
}
