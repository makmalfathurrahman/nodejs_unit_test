import { getProductById, getProduct } from "./database";

export class ProductService {
  static findProductById(id) {
    return getProductById(id);
  }

  static findProduct() {
    return getProduct();
  }
}
