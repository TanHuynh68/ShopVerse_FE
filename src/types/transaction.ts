export interface Transaction {
  _id: string;
  userId: string;
  orderId: OrderDetail; // object
  vnp_Amount: number;
  vnp_BankCode: string;
  vnp_BankTranNo: string;
  vnp_CardType: string;
  vnp_OrderInfo: string;
  vnp_PayDate: string;
  vnp_ResponseCode: string;
  vnp_TransactionNo: string;
  vnp_TransactionStatus: string;
  createdAt: string; // ISO date
}

/* ---------------- ORDER DETAIL ---------------- */

export interface OrderDetail {
  payment: PaymentInfo;
  _id: string;
  cartId: string;
  userId: string;
  items: OrderItem[];
  subTotal: number;
  status: string; // "PAID"
  createdAt: string;
  updatedAt: string;
}

/* ---------------- PAYMENT ---------------- */

export interface PaymentInfo {
  method: "VNPAY" | "COD" | "PAYPAL"; // mở rộng sau
}

/* ---------------- ORDER ITEMS ---------------- */

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}
