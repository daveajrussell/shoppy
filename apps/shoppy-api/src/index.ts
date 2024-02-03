import express, { Request, Response } from 'express';
import { Product } from 'shoppy-core';

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/basket/:id', (req: Request, res: Response) => {
  res.send([]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
