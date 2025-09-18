import { Brand } from "./brand.type";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  images: string[];
  isActive: boolean;
  isDeleted: boolean;
  discount: number;
  sku: string;
  brand_id: Brand;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
