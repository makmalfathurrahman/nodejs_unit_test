import {
  MyException,
  callNumber,
} from "../src/exception";

test("exception test", () => {
  expect(() => {
    callNumber(0);
  }).toThrow();

  expect(() => {
    callNumber(0);
  }).toThrow(MyException);

  expect(() => {
    callNumber(0);
  }).toThrowError("ERROR: Data not found!"); // Use toThrowError instead of toThrow
});
