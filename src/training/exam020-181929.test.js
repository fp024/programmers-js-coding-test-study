import solution from './exam020-181929.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution([3, 4, 5, 2, 1])).toBe(1);
  });

  it('TestCase 02', () => {
    expect(solution([5, 7, 8, 3])).toBe(0);
  });
});
