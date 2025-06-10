import solution from './exam009-12945';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 2,
    expected: 5,
  },
  {
    n: 5,
    expected: 5,
  },
];
// cspell:enable

describe('피보나치 수', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toBe(expected);
  });
});
