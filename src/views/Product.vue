<template>
  <section>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ product.name }}</h1>
        <h2 class="subtitle">{{ product.description }}</h2>
        <h3>{{ product.test }}</h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Product, { ProductDTO } from "@/models/Product";
import { ProductApi } from "@/api/ProductApi";

@Component({
  components: {}
})
export default class ProductView extends Vue {
  private product!: Product;

  async mounted(): Promise<void> {
    try {
      this.product = await ProductApi.getProduct(1);
      console.log(this.product);
    } catch (err) {
      //this.$router.push({ name: "error" });
    }
  }
}
</script>
