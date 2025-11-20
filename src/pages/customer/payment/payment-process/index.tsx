import { Spinner } from "@/components/common/spinner";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentProcess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vnp_Amount = searchParams.get("vnp_Amount");
  const vnp_BankCode = searchParams.get("vnp_BankCode");
  const vnp_BankTranNo = searchParams.get("vnp_BankTranNo");
  const vnp_CardType = searchParams.get("vnp_CardType");
  const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
  const vnp_PayDate = searchParams.get("vnp_PayDate");
  const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
  const vnp_TmnCode = searchParams.get("vnp_TmnCode");
  const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
  const vnp_TransactionStatus = searchParams.get("vnp_TransactionStatus");
  const vnp_TxnRef = searchParams.get("vnp_TxnRef");

  const vnpParams = {
    vnp_Amount: vnp_Amount || "",
    vnp_BankCode: vnp_BankCode || "",
    vnp_BankTranNo: vnp_BankTranNo || "",
    vnp_CardType: vnp_CardType || "",
    vnp_OrderInfo: vnp_OrderInfo || "",
    vnp_PayDate: vnp_PayDate || "",
    vnp_ResponseCode: vnp_ResponseCode || "",
    vnp_TmnCode: vnp_TmnCode || "",
    vnp_TransactionNo: vnp_TransactionNo || "",
    vnp_TransactionStatus: vnp_TransactionStatus || "",
    vnp_TxnRef: vnp_TxnRef || "",
  };

  useEffect(() => {
    setTimeout(returnPage, 2000);
  }, [searchParams]);

  const returnPage = async () => {
    if (vnp_ResponseCode === "00" && vnpParams) {
      const query = new URLSearchParams(vnpParams).toString();
      // process
      navigate(`/payment-success?${query}`);
    }else{
      const query = new URLSearchParams(vnpParams).toString();
      navigate(`/payment-failed?${query}`);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default PaymentProcess;
