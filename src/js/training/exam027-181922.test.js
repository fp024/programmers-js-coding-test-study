import solution from './exam027-181922.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(
      solution(
        [0, 1, 2, 4, 3],
        [
          [0, 4, 1],
          [0, 3, 2],
          [0, 3, 3],
        ]
      )
    ).toEqual([3, 2, 4, 6, 4]);
  });
});
