import {
  MyException,
  callNumber,
} from "../src/exception";

test("exception test", () => {
  expect(() => callNumber(0)).toThrow(
    MyException
  );
  expect(() => callNumber(0)).toThrow(
    "ERROR: Data not found!"
  );
});

test("exception else test", () => {
  expect(callNumber(1)).toBe("SUCCEED");
});
