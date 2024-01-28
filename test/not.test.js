test("string.not", () => {
  const name = "Hello World!";

  expect(name).not.toBe("");
  expect(name).not.toEqual("");
  expect(name).not.toMatch(/a/);
});

test("number.not", () => {
  const number = 1 + 2;

  expect(number).not.toBe(0);
  expect(number).not.toBeGreaterThan(5);
  expect(number).not.toBeLessThan(0);
});
