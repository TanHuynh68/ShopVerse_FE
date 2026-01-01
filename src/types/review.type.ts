export interface Review {
  _id: string;
  reviewer: Reviewer;
  product: string; // productId
  rating: number;
  isDeleted: boolean;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  comment?: string;
  likes: string[];
}

export interface Reviewer {
  _id: string;
  name: string;
  avatar: string;
}