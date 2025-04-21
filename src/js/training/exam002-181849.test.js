import solution from './exam002-181849.js';

describe('solution', () => {
  test("n = '123456789', result = 45", () => {
    expect(solution('123456789')).toBe(45);
  });

  test("n = '1000000', result = 1", () => {
    expect(solution('1000000')).toBe(1);
  });
});
