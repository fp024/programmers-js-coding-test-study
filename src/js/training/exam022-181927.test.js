import solution from './exam022-181927.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution([2, 1, 6])).toEqual([2, 1, 6, 5]);
  });

  test('TestCase 02', () => {
    expect(solution([5, 2, 1, 7, 5])).toEqual([5, 2, 1, 7, 5, 10]);
  });
});
