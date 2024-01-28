import { sayHello } from "../src/async";

test("async test", async () => {
  const result = await sayHello("World!");
  expect(result).toBe("Hello World!");
});

test("async matchers test", async () => {
  await expect(sayHello("World!")).resolves.toBe(
    "Hello World!"
  );
  await expect(sayHello()).rejects.toBe("Empty!");
});
