export interface Brand {
    _id: string;
    name: string;
    description: string;
    isDeleted: boolean;
    img: string;
    category_id: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}
