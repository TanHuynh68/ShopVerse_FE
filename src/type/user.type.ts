export interface User {
  _id: string;          // Mongo ObjectId (string)
  name: string;
  email: string;
  isActive: boolean;
  isDeleted: boolean;
  role: "SHOP";         // literal type vì luôn là SHOP
  createdAt: string;    // ISO date string
  updatedAt: string;    // ISO date string
}
