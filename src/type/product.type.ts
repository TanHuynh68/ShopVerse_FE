import { Brand } from "./brand.type";
import { DashboardCategory } from "./dashboard";
import { User } from "./user.type";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: DashboardCategory;
  images: string[];
  isActive: boolean;
  isDeleted: boolean;
  discount: number;
  sku: string;
  brand_id: Brand;
  shop_id: User;
  sold: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
