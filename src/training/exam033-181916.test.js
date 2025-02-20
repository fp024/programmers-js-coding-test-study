import solution from './exam033-181916.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution(2, 2, 2, 2)).toBe(2222);
  });

  it('TestCase 02', () => {
    expect(solution(4, 1, 4, 4)).toBe(1681);
  });

  it('TestCase 03', () => {
    expect(solution(6, 3, 3, 6)).toBe(27);
  });

  it('TestCase 04', () => {
    expect(solution(2, 5, 2, 6)).toBe(30);
  });

  it('TestCase 05', () => {
    expect(solution(6, 4, 2, 5)).toBe(2);
  });
});
