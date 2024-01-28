beforeAll(() => console.info("Before All 1"));
afterAll(() => console.info("After All 1"));
beforeEach(() => console.info("Before Each 1"));
afterEach(() => console.info("After Each 1"));

test("Test 1", () => console.info("Test 1"));

describe("Describe 2", () => {
  beforeAll(() => console.info("Before All 2"));
  afterAll(() => console.info("After All 2"));
  beforeEach(() => console.info("Before Each 2"));
  afterEach(() => console.info("After Each 2"));

  test("Test 2", () => console.info("Test 2"));
});
