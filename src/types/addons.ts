export interface UpdateClientAddonRequest {
  id: number;
  addonid?: number;
  status?: 'Active' | 'Cancelled' | 'Suspended' | 'Terminated' | 'Fraud';
  nextduedate?: string;
  nextinvoicedate?: string;
  terminationdate?: string;
  notes?: string;
}
