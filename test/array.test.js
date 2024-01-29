test("array test", () => {
  const numberArr = ["one", "two", "three"];
  expect(numberArr).toContain("three");
  expect(numberArr).toEqual(["one", "two", "three"]);

  const numberObj = [{ four: 4 }, { five: 5 }, { six: 6 }];
  expect(numberObj).toContainEqual({ five: 5 });
  expect(numberObj).toEqual([{ four: 4 }, { five: 5 }, { six: 6 }]);
});
