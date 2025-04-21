import solution from './exam019-181930.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(2, 6, 1)).toBe(9);
  });

  test('TestCase 02', () => {
    expect(solution(5, 3, 3)).toBe(473);
  });

  test('TestCase 03', () => {
    expect(solution(4, 4, 4)).toBe(110592);
  });
});
