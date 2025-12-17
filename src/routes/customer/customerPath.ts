
export enum CUSTOMER_PATH {
  PRODUCT_BY_CATEGORY = "/:id",
  PRODUCT_DETAIL = "/product/:product_id",
  CART_PAGE = "/cart",
  PAYMENT_PROCESS_PAGE = "/api/v1/payments/vnpay-return",
  PAYMENT_SUCCESS_PAGE = "/payment-success",
  PAYMENT_FAILED_PAGE = "/payment-failed",
  CUSTOMER_ORDERS_PAGE = "/orders",
  CUSTOMER_TRANSACTIONS_PAGE = "/transactions",
  CUSTOMER_PROFILE_PAGE = "/profile",
  CUSTOMER_BLOG_PAGE = "/blog",
  CUSTOMER_BLOG_DETAIL_PAGE = "/blog-detail",
}
