test("string test", () => {
  const value = "Hello World!";

  expect(value).toBe("Hello World!");
  expect(value).toEqual("Hello World!");
  expect(value).toMatch(/ll/);
});
