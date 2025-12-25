import { useProduct } from "@/hooks";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import RelatedProducts from "./related-products";
import { useEffect } from "react";
import CustomerReview from "./reviews";
import useReview from "@/hooks/api/useReview";

const ProductDetailPage = () => {
  const { product, products, fetchProducts } = useProduct();
  const {
    reviews,
    page,
    setPage,
    setTotalPages,
    totalPages,
    fetchReviewByProduct,
    handleCreateReview,
  } = useReview();

  useEffect(() => {
    if (product) {
      fetchProducts({
        category_id: product.category_id._id,
        sort: "popular",
        page: 1,
        size: 5,
        brand_id: [],
      });
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      fetchReviewByProduct({ id: product._id, page: page, size: 2 });
    }
  }, [product, page]);

  return (
    <div>
      {product && (
        <div className="grid grid-cols-12 gap-10">
          <LeftSection product={product} className="col-span-7" />
          <RightSection product={product} className="col-span-5" />
        </div>
      )}
      {product && (
        <RelatedProducts
          products={products}
          category={product?.category_id._id}
        />
      )}
      {!product && (
        <div className="h-[80vh] w-full flex justify-center items-center">
          Không tìm thấy sản phẩm nào.
        </div>
      )}
      {reviews.length > 0 && product ? (
        <CustomerReview
          handleCreateReview={handleCreateReview}
          reviews={reviews}
          setPage={setPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
          product={product}
          isSuccess={() =>
            fetchReviewByProduct({ id: product._id, page: page, size: 2 })
          }
        />
      ) : (
        <div className="h-[80vh] w-full flex justify-center items-center">
          Không tìm thấy đánh giá nào.
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
