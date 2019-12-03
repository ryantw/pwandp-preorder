import {
  State,
} from './state';

const getters = {
  isLoading: (state: State) => state.loading.some((l) => l.value),
  product: (state: State) => (id: string) => state.products.find((p) => p.id === id)?.value,
  products: (state: State) => state.products,
};

export {
  getters,
};
