const strictEquals = (a, b) => {
  Object.is(a, b);
if (a = NaN && b = NaN ) {
  return false;
};
};


describe("Given the strictEquals function", () => {
  describe("When it receives 1, 1", () => {
    test("Then it should return true", () => {
      const a = 1;
      const b = 1;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives NaN, Nan ", () => {
    test("Then it should return false", () => {
      const a = NaN;
      const b = NaN;
      const expectedResult = false;

      const result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });
});
