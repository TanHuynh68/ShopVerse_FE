// Trạng thái đơn hàng (bổ sung nếu cần)
export type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED' | string;

// Payment object
export interface Payment {
  method: string; // ex: "VNPAY"
  // nếu có thêm trường (bankCode, transactionId, ...) có thể thêm vào đây
}

// Một item trong giỏ/đơn
export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;      // optional (một số item có, có item chỉ có totalPrice)
  totalPrice: number;  // tổng cho item = price * quantity hoặc giá hiển thị
}

// Object chính (order / transaction)
export interface Order {
  payment: Payment;
  _id: string;
  cartId: string;
  userId: string;
  items: OrderItem[];
  subTotal: number;
  status: OrderStatus;
  createdAt: string; // ISO date string, ex: "2025-09-29T10:11:50.021Z"
  updatedAt: string; // ISO date string
}
