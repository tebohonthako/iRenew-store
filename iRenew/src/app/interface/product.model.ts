// Create a product model (interface) to define the structure of each product.
export interface Product {
    id: number;
    title: string;
    quantity: number,
    description: string;
    condition: string;
    price: string;
    currency: string;
    imageUrl: string;
    specs: string[];
  }
  