// Escribe una función llamada strictEquals(a, b) que devuelva el mismo valor que a === b.
//Tu implementación no puede usar los operadores === ni !==.

// Testea la función con este set de pruebas:

// Dada la función strictEquals
// Cuando se comparan <A> y <B>
// Entonces el resultado será <Result>

const strictEquals = (a, b) => Object.is(a, b);

describe("given the stricktEqualsFunction", () => {
  describe("when it receives values 1, 1", () => {
    test("it should return true", () => {
      const a = 1;
      const b = 1;
      const expectedResult = true;

      const result = strictEquals(a, b);

      expect(result).toBe(escxpectedResult);
    });
  });
});
