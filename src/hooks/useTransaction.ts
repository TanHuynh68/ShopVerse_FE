import TransactionService, { createTransactionValues } from "@/services/transaction.service";

const useTransaction = () => {
  const { createTransaction, loading } = TransactionService();

  const handleCreateTransaction = async (values: createTransactionValues) => {
    const response = await createTransaction(values);
    if (response.status_code === 200) {
      return response
    }
    return null;
  };

  return { isLoading: loading, handleCreateTransaction };
};

export default useTransaction;
