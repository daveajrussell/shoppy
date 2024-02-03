import { useEffect, useState } from 'react';
import { Product } from 'shoppy-core';
import ProductView from './ProductView';

const LatestProducts = () => {
  const [products, setProducts] = useState([] as Array<Product>);

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    const response = await fetch('/api/latest-products');
    const products = (await response.json()) as Array<Product>;
    setProducts(products);
  };
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Latest products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product: Product) => (
          <ProductView key={product.sku} product={product}></ProductView>
        ))}
      </div>
    </>
  );
};

export default LatestProducts;
