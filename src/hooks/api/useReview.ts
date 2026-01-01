import ReviewService, {
  createReviewsValues,
  getReviewsByProductQuery,
  updateLikeValues,
} from "@/services/reviews.service";
import { Review } from "@/types/review.type";
import { useState } from "react";
import { toast } from "sonner";

const useReview = () => {
  const { getReviewsByProduct, createReviews, updateLike, loading } =
    ReviewService();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  // set productId when access product detail page to fetchReviewByProduct after called handleUpdateLike
  const [productId, setProductId] = useState<string>("");

  console.log("productId: ", productId);
  const handleUpdateLike = async (values: updateLikeValues) => {
    const response = await updateLike(values);
    if (response && response.status_code === 200) {
      toast.success(response.message);
      fetchReviewByProduct({ id: productId, page: page, size: 2 });
      return response;
    }
    return null;
  };

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
      setTotalPages(response.totalPages);
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
    handleCreateReview,
    handleUpdateLike,
    setProductId,
  };
};

export default useReview;
