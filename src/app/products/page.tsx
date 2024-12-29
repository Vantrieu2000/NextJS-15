'use client';

import AddProductForm from '@/src/components/AddProductForm';
import { useProductStore } from '@/src/store/useProductStore';
import { useEffect } from 'react';

export default function ProductsPage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <AddProductForm />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 