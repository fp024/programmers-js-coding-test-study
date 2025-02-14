import solution from "./exam007-181943.js";

describe("solution", () => {
  it("TestCase 01", () => {
    expect(solution("He11oWor1d", "lloWorl", 2)).toBe("HelloWorld");
  });

  it("TestCase 02", () => {
    expect(solution("Program29b8UYP", "merS123", 7)).toBe("ProgrammerS123");
  });
});
