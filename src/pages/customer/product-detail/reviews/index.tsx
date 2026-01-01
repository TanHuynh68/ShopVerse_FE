import { FormEvent, useState } from "react";
import { Star, ThumbsUp, MessageCircle, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Review } from "@/types/review.type";
import { formatDateMonthYearVN } from "@/utils/format";
import {
  createReviewsValues,
  updateLikeValues,
} from "@/services/reviews.service";
import { Product } from "@/types/product.type";

interface StoreData {
  pageTitle: string;
  pageDescription: string;
  formTitle: string;
  formDescription: string;
  nameLabel: string;
  emailLabel: string;
  reviewLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  reviewPlaceholder: string;
  submitButtonText: string;
  submittingButtonText: string;
  reviews: Review[];
}

interface CustomerReviewProps {
  reviews: Review[];
  totalPages: number;
  setPage: (page: number) => void;
  setTotalPages: (page: number) => void;
  handleCreateReview: (values: createReviewsValues) => Promise<any>;
  isSuccess: () => void;
  product: Product;
  handleUpdateLike: (values: updateLikeValues) => Promise<any>;
}

const CustomerReview = ({
  reviews,
  totalPages,
  setPage,
  handleCreateReview,
  isSuccess,
  product,
  handleUpdateLike,
}: CustomerReviewProps) => {
  const storeData: StoreData = {
    pageTitle: "Đánh giá của khách hàng",
    pageDescription:
      "Đọc những gì khách hàng nói về trải nghiệm của họ với sản phẩm và dịch vụ của chúng tôi.",
    formTitle: "Gửi đánh giá của bạn",
    formDescription: "Chia sẻ trải nghiệm của bạn với cộng đồng",
    nameLabel: "Họ và tên",
    emailLabel: "Email",
    reviewLabel: "Viết đánh giá của bạn",
    namePlaceholder: "Nguyễn Văn A",
    emailPlaceholder: "email@example.com",
    reviewPlaceholder: "Viết tại đây...",
    submitButtonText: "Gửi đánh giá",
    submittingButtonText: "Đang gửi...",
    reviews: reviews,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  const [formData, setFormData] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await handleCreateReview({
      comment: formData || "",
      rating: rating,
      product: product._id,
    });
    if (response) {
      isSuccess();
      setTimeout(() => {
        setRating(0);
        setFormData("");
        setIsSubmitting(false);
      }, 1000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">{storeData.pageTitle}</h1>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          {storeData.pageDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {reviews.length > 0 ? (
          <div className="space-y-6 lg:col-span-2">
            {reviews.map((review) => (
              <Card key={review._id} className="transition-all hover:shadow-md">
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="bg-muted size-12">
                        <AvatarImage
                          src={review.reviewer.avatar}
                          alt={`${review.reviewer.name}'s avatar`}
                        />
                        <AvatarFallback>
                          {review.reviewer.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{review.reviewer.name}</h3>
                        <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                          <div
                            className="flex"
                            aria-label={`Rated ${review.rating} out of 5`}
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "size-4",
                                    i < review.rating
                                      ? "fill-foreground text-foreground"
                                      : "text-foreground fill-transparent"
                                  )}
                                />
                              ))}
                          </div>
                          <span>•</span>
                          <time
                            dateTime={
                              new Date(review.createdAt)
                                .toISOString()
                                .split("T")[0]
                            }
                            className="flex items-center"
                          >
                            <Calendar className="me-1 size-3" />
                            {formatDateMonthYearVN(review.createdAt)}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">{review.comment}</p>
                  <div className="mt-4 flex gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleUpdateLike({reviewId: review._id})}
                      className="text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer"
                    >
                      <ThumbsUp
                        className={cn(
                        )}
                      />
                      <span>
                        {review.likes.length}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:bg-primary/10 hover:text-primary cursor-pointer"
                      aria-label="View comments"
                    >
                      <MessageCircle className="me-2 size-4" />
                      {/* <span>{review.comment}</span> */}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {totalPages > 1 && (
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => {
                        setCurrentPage(currentPage - 1),
                          setPage(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => {
                          setCurrentPage(i + 1), setPage(i + 1);
                        }}
                        isActive={currentPage === i + 1}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => {
                        setCurrentPage(currentPage + 1),
                          setPage(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        ) : (
          <div className="lg:col-span-2 h-full w-full flex justify-center items-center">
            Không tìm thấy đánh giá nào.
          </div>
        )}
        {/* Submit form */}
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <Card>
            <CardHeader>
              <CardTitle id="review-form-heading">
                {storeData.formTitle}
              </CardTitle>
              <CardDescription>{storeData.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <div
                    className="flex gap-1"
                    role="radiogroup"
                    aria-label="Rating"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        variant="ghost"
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="focus-visible:ring-ring cursor-pointer rounded-full !p-1 hover:bg-transparent focus:outline-hidden focus-visible:ring-2"
                        aria-pressed={rating === star}
                        aria-label={`Rate ${star} ${
                          star === 1 ? "star" : "stars"
                        }`}
                      >
                        <Star
                          className={cn(
                            "size-6",
                            (hoveredStar || rating) >= star
                              ? "fill-foreground"
                              : ""
                          )}
                        />
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">{storeData.reviewLabel}</Label>
                  <Textarea
                    id="comment"
                    value={formData}
                    onChange={(e) => setFormData(e.target.value)}
                    placeholder={storeData.reviewPlaceholder}
                    required
                    aria-required="true"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? storeData.submittingButtonText
                    : storeData.submitButtonText}
                  {!isSubmitting && <Send className="ms-2 size-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
