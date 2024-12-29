import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      loading: false,
      error: null,

      fetchProducts: async () => {
        set({ loading: true });
        try {
          const response = await fetch('/api/products');
          const data = await response.json();
          set({ products: data, loading: false });
        } catch (error) {
          set({ error: 'Failed to fetch products', loading: false });
        }
      },

      addProduct: (product: Product) => {
        set((state: ProductStore) => ({
          products: [...state.products, product],
        }));
      },

      removeProduct: (id: number) => {
        set((state: ProductStore) => ({
          products: state.products.filter((product: Product) => product.id !== id),
        }));
      },
    }),
    {
      name: 'product-storage',
    }
  )
); 
