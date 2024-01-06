// spec/cents-to-decimals.spec.js

describe("function centsToDecimals", () => {
  it("Should convert value from cents to floating point number with 2 decimals", () => {
    expect(centsToDecimals(105)).toBe(1.05);
    expect(centsToDecimals(23)).toBe(0.23);
  });
  it("Should return undefined if argument is not a number", () => {
    expect(centsToDecimals("hello")).toBeUndefined();
    expect(centsToDecimals("200")).toBeUndefined();
    expect(centsToDecimals("This is fun")).toBeUndefined();
  });
  it("Should return zero if no number was passed as an argument", () => {
    expect(centsToDecimals()).toBe(0);
  });
});
