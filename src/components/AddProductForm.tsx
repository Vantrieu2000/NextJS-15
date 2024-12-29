'use client';

import { useState } from 'react';
import { ProductStore, useProductStore } from '../store/useProductStore';

export default function AddProductForm() {
  const addProduct = useProductStore((state: ProductStore) => state.addProduct);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(), // Tạm thời dùng timestamp làm id
      name,
      price: Number(price),
    };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        addProduct(newProduct);
        setName('');
        setPrice('');
      }
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
} 