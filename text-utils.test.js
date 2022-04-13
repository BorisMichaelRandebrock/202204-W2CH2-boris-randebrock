const strictEquals = (a, b) => Object.is(a, b);

describe("given the stricktEquals Function", () => {
  describe("when it receives values 1, 1", () => {
    test("it should return true", () => {
      const a = 1;
      const b = 1;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });
});
