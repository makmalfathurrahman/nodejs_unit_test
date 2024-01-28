test("test toBe", () => {
  const world = "World!";
  const sayHello = `Hello ${world}`;

  expect(sayHello).toBe("Hello World!");
});

test("test toEqual", () => {
  let number = {
    id: "1",
  };
  Object.assign(number, { name: "One" });

  expect(number).toEqual({
    id: "1",
    name: "One",
  });
});
