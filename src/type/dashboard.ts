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

export interface DashboardBrand {
  _id: string;
  name: string;
  description: string;
  isDeleted: boolean;
  img: string;
  category_id: string;
  createdAt: string;   // hoặc Date nếu bạn parse thành Date
  updatedAt: string;   // hoặc Date
}

export interface DashboardCategory {
  _id: string;
  name: string;
  description: string;
  isDeleted: boolean;
  img: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export interface DashboardProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: DashboardCategory;  // nested object
  images: string[];
  isActive: boolean;
  isDeleted: boolean;
  discount: number;
  sku: string;
  brand_id: Brand;        // nested object
  createdAt: string,
  updatedAt: string,
  sold: number
}

interface Brand {
  _id: string;
  name: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  category_id: string;
  img: string;
}

// export interface DashboardProduct {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   category_id: DashboardCategory;
//   images: string[];
//   isActive: boolean;
//   isDeleted: boolean;
//   discount: number;
//   sku: string;
//   brand_id: Brand;
//   createdAt: string;
//   updatedAt: string;
// }
