import { sum } from "../src/sum";

describe("when call sum", () => {
  it("should 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
