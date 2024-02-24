export interface Product {
  sku: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
}
