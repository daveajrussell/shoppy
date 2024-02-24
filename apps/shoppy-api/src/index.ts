import express, { Request, Response } from 'express';
import { Product, Cart } from 'shoppy-core';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173',
} as cors.CorsOptions;

const app = express();
app.use(cors(corsOptions));
const port = process.env.PORT || 3000;

interface CartDictionary {
  [id: number]: Cart;
}

const carts: CartDictionary = {};
let cartIdSeed = 0;

app.get('/latest-products', (req: Request, res: Response) => {
  const products = Array<Product>(
    {
      sku: 'ABC-12345-S-BL',
      name: 'Basic Tee',
      description: 'White',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-23456-S-BL',
      name: 'Basic Tee',
      description: 'Black',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-34567-S-BL',
      name: 'Basic Tee',
      description: 'Teal',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-45678-S-BL',
      name: 'Basic Tee',
      description: 'Ochre',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-56789-S-BL',
      name: 'Basic Tee',
      description: 'Plum',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-67891-S-BL',
      name: 'Basic Tee',
      description: 'Ombre',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-78912-S-BL',
      name: 'Basic Tee',
      description: 'Sand',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      sku: 'ABC-89123-S-BL',
      name: 'Basic Tee',
      description: 'Stone',
      price: 38.0,
      imageSrc:
        'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  );
  res.send(products);
});

app.get('/cart/:id', (req: Request, res: Response) => {
  const cart = getCart(parseInt(req.params.id)) || createCart();
  res.send(cart);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const getCart = (id: number): Cart => {
  return carts[id];
};

const createCart = (): Cart => {
  const id = (cartIdSeed += 1);
  const cart = {
    id: id,
    products: Array<Product>(),
    total: 0,
  };
  carts[id] = cart;
  return cart;
};
