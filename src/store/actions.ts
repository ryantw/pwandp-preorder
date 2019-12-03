import {
  State,
  ProductMap,
  LoadingMap,
} from './state';

import { RestApi } from '@/api/RestApi';
import {
  Product,
} from '@/models';
import { ProductApi } from '@/configs';

import {
  SET_LOADING,
  SET_PRODUCT,
} from './mutationTypes';
import { SemiRandomId } from '@/utils';

interface ProductAction {
  id: string;
   // only set to true if you definitely want to overwrite cache
   // if this api call fails it will overwrite cache with undefined
  overwrite?: boolean;
}

const actions = {
  /**
   * Sets a new loading property
   * @returns the ID of the new loading property
   */
  setIsLoading ({ commit }: any): string {
    const id = SemiRandomId();
    const loadingAction: LoadingMap = {
      id,
      value: true,
    };
    commit(SET_LOADING, loadingAction);
    return id;
  },
  /**
   * Sets a new loading property
   * @returns the ID of the new loading property
   */
  setNotLoading ({ commit }: any, id: string): void {
    const loadingAction: LoadingMap = {
      id,
      value: false,
    };
    commit(SET_LOADING, loadingAction);
  },
  /**
   * Checks cache for product and fetches product if not valid
   * @param payload
   */
  async getProduct ({ state, commit, dispatch }: { commit: any, state: State, dispatch: any }, payload: ProductAction): Promise<void> {
    if (!payload.overwrite) {
      const cachedProduct = state.products.find((p) => p.id === payload.id);
      /* TODO
       * Add a caching time to product.
       * If a product has been cached for a long time
       * then maybe invalidate that cache and fetch new
       * this won't matter until we are saving products to localstorage/db
      */
      if (cachedProduct?.value) {
        console.log('cached product, returning early');
        return;
      }
    }
    let productMap: ProductMap = {
      id: payload.id,
      value: undefined,
    };
    const loadingId = dispatch('setIsLoading');
    try {
      console.log('fetching product:', payload.id);
      const product = await RestApi
        .get<Product>({ ...ProductApi, url: `${ProductApi.url}/${payload.id}` });

      if (!product) {
        console.log('Product response was successful but empty', product);
      }
      productMap.value = product;
    } catch (err) {
      console.log('Product response failed for product:', payload.id, err);
    } finally {
      commit(SET_PRODUCT, productMap);
      dispatch('setNotLoading', loadingId);
    }
  },
};

export {
  actions,
  ProductAction,
};
