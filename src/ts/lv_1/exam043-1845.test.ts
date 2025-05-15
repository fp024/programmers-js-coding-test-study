import solution from './exam043-1845';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    nums: [3, 1, 2, 3],
    expected: 2,
  },
  {
    nums: [3, 3, 3, 2, 2, 4],
    expected: 3,
  },
  {
    nums: [3, 3, 3, 2, 2, 2],
    expected: 2,
  },
];
// cspell:enable

describe('폰켓몬', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ nums, expected }) => {
    expect(solution(nums)).toEqual(expected);
  });
});
