import { sayHello } from "../src/async";

test.concurrent("test concurrent 1", async () => {
  await expect(sayHello("World!")).resolves.toBe(
    "Hello World!"
  );
});

test.concurrent("test concurrent 2", async () => {
  await expect(sayHello("World!")).resolves.toBe(
    "Hello World!"
  );
});

test.concurrent("test concurrent 3", async () => {
  await expect(sayHello("World!")).resolves.toBe(
    "Hello World!"
  );
});
