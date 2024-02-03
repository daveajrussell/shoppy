import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send([
    { sku: '', name: '', description: '', price: 0.0, image: '' },
    { sku: '', name: '', description: '', price: 0.0, image: '' },
    { sku: '', name: '', description: '', price: 0.0, image: '' },
    { sku: '', name: '', description: '', price: 0.0, image: '' },
    { sku: '', name: '', description: '', price: 0.0, image: '' },
    { sku: '', name: '', description: '', price: 0.0, image: '' },
  ]);
});

app.get('/basket/:id', (req: Request, res: Response) => {
  res.send([]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
