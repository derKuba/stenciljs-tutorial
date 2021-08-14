const { add, sub } = require("./index");

describe("My first tests", () => {
  test("is true really true", () => {
    expect(true).toBe(true);
  });

  it("should be true", () => {
    expect(true).toBe(true);
  });

  xit("should be false", () => {
    expect(true).toBe(false);
  });

  describe("Mini-Calculator", () => {
    test("should add two numbers", () => {
      const sum = add(25, 17);
      expect(sum).toBe(42);
    });

    test("should sub two numbers", () => {
      const difference = sub(59, 17);
      expect(difference).toBe(42);
    });

    test.each`
      summe | summand | expected
      ${1}  | ${8}    | ${9}
      ${2}  | ${9}    | ${11}
      ${3}  | ${10}   | ${13}
      ${4}  | ${11}   | ${14}
      ${5}  | ${12}   | ${17}
      ${6}  | ${13}   | ${19}
      ${7}  | ${14}   | ${21}
    `("should add $summe to $summand", ({ summe, summand, expected }) => {
      expect(add(summe, summand)).toBe(expected);
    });
  });
});
