import { getProductById, getProduct } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database");

test("mock modules getProductById() test", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: "Mock Product" };
  });

  const product = ProductService.findProductById(1);
  expect(product).toEqual({ id: 1, name: "Mock Product" });
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
