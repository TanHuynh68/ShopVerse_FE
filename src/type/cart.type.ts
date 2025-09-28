export interface Cart {
    _id: string;
    userId: {
        _id: string;
        name: string;
        email: string;
    };
    items: CartItem[];
    subTotal: number;
    isCheckedOut: boolean;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

interface CartItem {
    productId: Product;
    name: string;
    price: number;
    quantity: number;
    image: string;
    totalPrice: number;
}

interface Product {
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
    brand_id: string;
    shop_id: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}
