import ProductSizes from "@/models/ProductSizes";

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  picture: string;
  price: number;
  enabled: boolean;
  pickUp: boolean;
  ship: boolean;
  dateAdded: Date;
  lastModified: Date;
  closeProduct: Date;
  productSize: ProductSizes;
}

export class ProductDTO implements IProduct {
  id?: number;
  name: string = "default";
  description: string = "default";
  picture: string = "";
  price: number = 0;
  enabled: boolean = false;
  pickUp: boolean = false;
  ship: boolean = false;
  dateAdded: Date = new Date();
  lastModified: Date = new Date();
  closeProduct: Date = new Date();
  productSize: any;
}

export default class Product extends ProductDTO {
  constructor(dto: ProductDTO) {
    super();
    Object.assign(this, dto);
  }
  // Functions here

  get test(): string {
    return `${this.name} ${this.description}`;
  }
}
