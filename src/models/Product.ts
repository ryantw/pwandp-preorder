import { ProductSizes } from '@/models/ProductSizes';

interface Product {
  id?: number;
  name: string;
  description: string;
  picture: string;
  price: number;
  enabled: boolean;
  pickUp: boolean;
  ship: boolean;
  dateAdded: Date;
  lastModified: Date;
  closeProduct: Date;
  productSize: ProductSizes;
}

export {
  Product,
};
