import { sum } from "../src/sum";

beforeAll(() => {
  console.info("Before All");
});

afterAll(() => {
  console.info("After All");
});

beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});

test("setup first test", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
  console.info("setup first test");
});

test("setup second test", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
  console.info("setup second test");
});
