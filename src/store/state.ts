import { Product } from '@/models/Product';

interface MapStringT<T> {
  id: string;
  value: T;
}

interface ProductMap extends MapStringT<Product|undefined> {}
interface LoadingMap extends MapStringT<boolean> {}

interface State {
  loading: LoadingMap[];
  products: ProductMap[];
}

const state: State = {
  loading: [],
  products: [],
};

export {
  state,
  State,
  MapStringT,
  ProductMap,
  LoadingMap,
};
