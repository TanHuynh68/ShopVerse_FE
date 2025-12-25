import ReviewService, {
  createReviewsValues,
  getReviewsByProductQuery,
} from "@/services/reviews.service";
import { Review } from "@/types/review.type";
import { useState } from "react";
import { toast } from "sonner";

const useReview = () => {
  const { getReviewsByProduct, createReviews, loading } = ReviewService();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);


  const handleCreateReview = async (values: createReviewsValues) => {
    const response = await createReviews(values);
    if (response && response.status_code === 201) {
      toast.success(response.message);
      return response;
    }
    return null;
  };

  const fetchReviewByProduct = async (query: getReviewsByProductQuery) => {
    const response = await getReviewsByProduct(query);
    if (response.status_code === 200) {
      setReviews(response.data);
      setTotalPages(response.totalPages)
      return response;
    }
    return null;
  };

  return {
    isLoading: loading,
    reviews,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchReviewByProduct,
    handleCreateReview
  };
};

export default useReview;
