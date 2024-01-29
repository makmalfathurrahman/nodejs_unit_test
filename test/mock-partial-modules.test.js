import { getProductById, getProduct } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database", () => {
  const originalModule = jest.requireActual("../src/database");

  return {
    __esModule: true,
    ...originalModule,
    getProduct: jest.fn(),
  };
});

test.failing("mock modules getProductById() test", () => {
  ProductService.findProductById(1);
});

test("mock modules getProduct() test", () => {
  const products = [
    { id: 1, name: "Mock Product 1" },
    { id: 2, name: "Mock Product 2" },
  ];

  getProduct.mockReturnValue(products);

  const product = ProductService.findProduct();
  expect(product).toEqual(products);
});
