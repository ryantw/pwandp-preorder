import { Product } from '../Product';

interface ProductResponse {
  status: number;
  message: string;
  data: Product;
}

export {
  ProductResponse,
};
