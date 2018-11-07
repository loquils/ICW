import add from "../add";

describe("add tests", () => {
  test("should add two numbers", () => {
    expect(add(1, 1)).toEqual(2);
  });

  test("should add two negatives numbers", () => {
    expect(add(-1, -1)).toEqual(-2);
  });
});
