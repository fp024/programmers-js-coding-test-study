import solution from './exam026-181923.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(
      solution(
        [0, 1, 2, 4, 3],
        [
          [0, 4, 2],
          [0, 3, 2],
          [0, 2, 2],
        ]
      )
    ).toEqual([3, 4, -1]);
  });
});
