import { ProductService } from "@/services";
import { Product } from "@/type/product.type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProduct = () => {
    const { getProducts, getProduct, loading } = ProductService();
    const [products, setProducts] = useState<Product[]>([]);
    const [brandIds, setBrandIds] = useState<string[]>([])
    const [filterProducts, setFilterProducts] = useState<Product[]>([]);
    //product detail
    const [product, setProduct] = useState<Product | null>(null);
    const { product_id } = useParams();

    // fetch product
    useEffect(() => {
        fetchProducts();
    }, [])

    // fetch product detail if have product_id
    useEffect(() => {
        fetchProduct();
    }, [product_id])

    // filter product by brandId
    useEffect(() => {
        setFilterProducts(brandIds.length > 0 ? products.filter(product => brandIds.includes(product.brand_id._id)) : products)
    }, [brandIds, products])

    // fetch all product
    const fetchProducts = async () => {
        const response = await getProducts();
        if (response) {
            setProducts(response)
        }
    }

    //fetch product detail
    const fetchProduct = async () => {
        if (product_id) {
            const response = await getProduct(product_id)
            if (response) {
                setProduct(response)
            }
        }
    }
    return { productLoading: loading, products: filterProducts, product, brandIds, setBrandIds, fetchProducts, fetchProduct }
}

export default useProduct;