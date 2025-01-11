"use client"
import { getProducts } from "@/services/productsService";
import { useQuery } from "react-query";

export default function ProductsPage() {
    const { data: products, isLoading, error } = useQuery('products', getProducts);

    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Failed to load products</div>;

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <div>
                <h1 className="text-4xl font-bold mb-4">Products</h1>
            </div>
            <div>
                <ul>
                    {products?.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}