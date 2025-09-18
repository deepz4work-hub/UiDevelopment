import { createContext, useContext, useState } from 'react';

// Create the context
const ProductContext = createContext();

// Provider component
export function ProductProvider({ children }) {
  // Example state: products array
  const [products, setProducts] = useState([]);

  // You can add more state and functions as needed

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom hook for using the context
export function useProductContext() {
  return useContext(ProductContext);
}
