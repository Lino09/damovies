import { everyArg } from "@/utils/helpers";

describe("Test Helper Functions", () => {
  test("everyArg function", () => {
    const argsTrue = ["hello", 20, true];
    const argsFalse = ["", 20, true];

    const resultTrue = everyArg(...argsTrue);
    const resultFalse = everyArg(...argsFalse);

    expect(resultTrue).toBe(true);
    expect(resultFalse).toBe(false);
  });
});
