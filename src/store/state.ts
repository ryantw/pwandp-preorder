import { Product } from '@/models/Product';


interface State {
  loading: boolean;
  products: Map<string, Product>;
}

const state: State = {
  loading: false,
  products: new Map<string, Product>(),
};

export {
  state,
  State,
};
