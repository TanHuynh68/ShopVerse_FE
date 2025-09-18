import { ProductService } from "@/services";
import { Product } from "@/type/product.type";
import { useEffect, useState } from "react";

const useProduct = () => {
    const { getProducts, loading } = ProductService();
    const [products, setProducts] = useState<Product[]>([]);
    const [brandIds, setBrandIds] = useState<string[]>([])
    const [filterProducts, setFilterProducts] = useState<Product[]>([]);

    console.log('brandIds: ', brandIds)
    console.log('filterProducts: ', filterProducts)

    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        setFilterProducts(brandIds.length > 0 ? products.filter(product => brandIds.includes(product.brand_id._id)) : products)
    }, [brandIds, products])

    const fetchProducts = async () => {
        const response = await getProducts();
        if (response) {
            setProducts(response)
        }
    }

    return { productLoading: loading, products: filterProducts, brandIds, setBrandIds, fetchProducts }
}

export default useProduct;