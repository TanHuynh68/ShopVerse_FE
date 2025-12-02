export interface DashboardStats {
  numberOfOrders: number;
  numberOfUsers: number;
  numberOfTransactions: number;
  numberOfBrands: number;
  numberOfCategories: number;
  numberOfProducts: number;
  revenue: number;
  chartRevenue: ChartRevenueItem[];
  userActive: number
}

export interface ChartRevenueItem {
  date: string;   // "YYYY-MM-DD"
  orders: number;
}
