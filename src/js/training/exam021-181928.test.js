import solution from './exam021-181928.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution([3, 4, 5, 2, 1])).toBe(393);
  });

  it('TestCase 02', () => {
    expect(solution([5, 7, 8, 3])).toBe(581);
  });
});
