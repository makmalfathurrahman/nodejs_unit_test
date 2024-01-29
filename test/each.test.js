import { sumAll } from "../src/sum";

const testCases = [
  { numbers: [10, 10, 10], result: 30 },
  { numbers: [10, 10, 10, 10, 10], result: 50 },
  {
    numbers: [10, 10, 10, 10, 10, 10, 10],
    result: 70,
  },
];

test.each(testCases)(
  "test sumAll(%numbers) should result %result",
  ({ numbers, result }) => {
    expect(sumAll(numbers)).toBe(result);
  }
);
