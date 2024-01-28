test("truthiness matchers", () => {
  const nullValue = null;
  expect(nullValue).toBeNull();
  expect(nullValue).toBeDefined();
  expect(nullValue).toBeFalsy();

  const undefinedValue = undefined;
  expect(undefinedValue).toBeUndefined();
  expect(undefinedValue).toBeFalsy;

  const sayHello = "Hello World!";
  expect(sayHello).toBeTruthy();
});
