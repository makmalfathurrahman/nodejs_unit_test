import { getBalance } from "../src/async";

getBalance;

test("mock function async test", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);

  await expect(getBalance("Alex", from)).resolves.toEqual({ name: "Alex", balance: 1000 });
  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});
