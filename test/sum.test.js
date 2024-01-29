import { sum, sumAll } from "../src/sum";

test("test sum(num1, num2)", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("test string", () => {
  const result = "Hello World!";
  expect(result).toBe("Hello World!");
});

test("array integer test", () => {
  const numbers = [10, 10, 10];
  expect(sumAll(numbers)).toBe(30);
});
