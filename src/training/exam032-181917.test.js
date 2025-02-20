import solution from './exam032-181917.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution(false, true, true, true)).toBe(true);
  });

  it('TestCase 02', () => {
    expect(solution(true, false, false, false)).toBe(false);
  });
});
