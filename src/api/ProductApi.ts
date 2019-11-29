import axios from "axios";
import Product from "@/models/Product";

interface ProductResponse {
  status: number;
  message: string;
  data: Product;
}

// Rework to a more generic API
export class ProductApi {
  private static productAxios = axios.create();

  static async getProduct(id: number): Promise<Product> {
    let response = await this.productAxios.get<Product>(
      "http://localhost:8080/api/product/" + id
    );
    console.log(response);
    return response.data;
  }
}
