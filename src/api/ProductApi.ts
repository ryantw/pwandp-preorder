import axios from "axios";
import Product, { ProductDTO } from "@/models/Product";

// Fix l8r
interface RequestProduct {
  status: number;
  data: ProductDTO;
}

// Rework to a more generic API
export abstract class ProductApi {
  private static productAxios = axios.create();

  static async getProduct(id: number): Promise<Product | undefined> {
    let response = await this.productAxios.get<Product>(
      "http://localhost:8080/api/product/" + id
    );
    return new Product(response.data);
  }
}
