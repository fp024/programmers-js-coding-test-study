import solution from './exam047-12921';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 10,
    expected: 4,
  },
  {
    n: 5,
    expected: 3,
  },
];
// cspell:enable

describe('소수 찾기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toBe(expected);
  });
});
