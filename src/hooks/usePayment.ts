import PaymentService from "@/services/paymen.servivce";

export interface createPaymentValues {
  amount: number;
  bankCode: string;
  orderId: string;
  returnUrl: string;
}

const usePayment = () => {
  const { createPaymentVnPay, loading } = PaymentService();

  const handleCreatePayment = async (values: createPaymentValues) => {
    const response = await createPaymentVnPay(values);
    if (response.status_code === 200) {
      window.location.href = `${response.data}`
    }
  };

  return { isLoading: loading, handleCreatePayment };
};

export default usePayment;
