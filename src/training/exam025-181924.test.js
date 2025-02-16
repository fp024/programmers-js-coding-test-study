import solution from './exam025-181924.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(
      solution(
        [0, 1, 2, 3, 4],
        [
          [0, 3],
          [1, 2],
          [1, 4],
        ]
      )
    ).toEqual([3, 4, 1, 0, 2]);
  });
});
