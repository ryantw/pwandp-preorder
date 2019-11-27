import axios from "axios";
import Product, { ProductDTO } from "@/models/Product";

interface ProductResponse {
  status: number;
  message: string;
  data: ProductDTO;
}

// Rework to a more generic API
export abstract class ProductApi {
  private static productAxios = axios.create();

  static async getProduct(id: number): Promise<Product> {
    let response = await this.productAxios.get<ProductResponse>(
      "http://localhost:8080/api/product/" + id
    );
    console.log("name?");
    return new Product(response.data.data);
  }
}
