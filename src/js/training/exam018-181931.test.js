import solution from './exam018-181931.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution(3, 4, [true, false, false, true, true])).toBe(37);
  });

  it('TestCase 02', () => {
    expect(solution(7, 1, [false, false, false, true, false, false, false])).toBe(10);
  });
});
