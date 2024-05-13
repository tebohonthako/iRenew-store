// Create a product model (interface) to define the structure of each product.
export interface Product {
    id: string;
    title: string;
    quantity: number,
    description: string;
    condition: string;
    category: string;
    price: string;
    currency: string;
    imageUrl: string;
    specs: string[];
  }
  