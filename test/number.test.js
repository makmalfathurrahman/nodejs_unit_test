test("number test", () => {
  expect(1).toBeGreaterThan(0);
  expect(1).toBeGreaterThanOrEqual(1);
  expect(1).toBeLessThan(2);
  expect(1).toBeLessThanOrEqual(1);

  expect(1).toBe(1);
  expect(1).toEqual(1);
});
