import { Card } from "@/components/ui/card";
import { formatDateTime, formatVND } from "@/utils/format";
import { X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const vnp_Amount = searchParams.get("vnp_Amount");
  const vnp_CardType = searchParams.get("vnp_CardType");
  const vnp_PayDate = searchParams.get("vnp_PayDate");
//   const vnp_BankCode = searchParams.get("vnp_BankCode");
//   const vnp_BankTranNo = searchParams.get("vnp_BankTranNo");
//   const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
//   const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
//   const vnp_TmnCode = searchParams.get("vnp_TmnCode");
//   const vnp_TransactionNo = searchParams.get("vnp_TransactionNo");
//   const vnp_TransactionStatus = searchParams.get("vnp_TransactionStatus");
//   const vnp_TxnRef = searchParams.get("vnp_TxnRef");
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-900">
      <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <X className="text-red-500 h-16 w-16" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
            Thanh toán thất bại
          </h1>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Số tiền:</span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {formatVND(vnp_Amount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Phương thức thanh toán:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {vnp_CardType}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Thời gian:</span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {formatDateTime(vnp_PayDate || "")}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          >
            View Order History
          </Link>
        </div>
      </Card>
    </div>
  );
}

