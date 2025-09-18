interface Brand {
    _id: string;
    name: string;
    description: string;
}

interface Cate {
    _id: string;
    name: string;
    description: string;
    isDeleted: boolean;
    brand_id: Brand;
    img: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}
