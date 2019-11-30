<template>
  <section>
    <div class="hero-body">
      <div class="container">
        <template v-if="product">
          <h1 class="title">{{ product.name }}</h1>
          <h2 class="subtitle">{{ product.description }}</h2>
          <h3>{{ product.id }}</h3>
        </template>
        <template v-else-if="isLoading">
          <progress class="progress is-small is-primary" max="100" />
        </template>
        <template v-else>
          Failed to load product with ID: {{ productId }}.
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '@/models/Product';
import { RestApi } from '@/api/RestApi';
import { Config } from '@/api/Config';

@Component({
  components: {},
})
export default class ProductView extends Vue {
  private product: Product|null = null;
  private isLoading: boolean = true;
  private apiConfig: Config = {
    url: String(process.env.VUE_APP_PRODUCT_URL),
  };

  async beforeMount (): Promise<void> {
    this.getProduct();
  }

  async getProduct (): Promise<void> {
    this.isLoading = true;
    try {
      const response = await RestApi.get<Product>(this.apiConfig);
      if (response) {
        this.product = response;
      } else {
        console.log('Response was successful buy empty', response);
        throw new Error('Response was successful buy empty');
      }
    } catch {
      // log error
    } finally {
      this.isLoading = false;
    }
  }

  get productId (): string {
    return this.$route.params.productId;
  }
}
</script>
