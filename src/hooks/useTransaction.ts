import TransactionService, { createTransactionValues } from "@/services/transaction.service";
import { Transaction } from "@/types/transaction";
import { useState } from "react";

const useTransaction = () => {
  const { createTransaction, getMyTransactions, loading } = TransactionService();
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleCreateTransaction = async (values: createTransactionValues) => {
    const response = await createTransaction(values);
    if (response.status_code === 200) {
      return response
    }
    return null;
  };

  const fetchMyTransactions = async (): Promise<Transaction[]> => {
    const response = await getMyTransactions();
    if (response.status_code === 200) {
      setTransactions(response.data);
      return response
    }
    return [];
  };

  return { isLoading: loading, transactions, handleCreateTransaction, fetchMyTransactions };
};

export default useTransaction;
