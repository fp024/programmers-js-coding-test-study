import solution from './exam007-12911';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 78,
    expected: 83,
  },
  {
    n: 15,
    expected: 23,
  },
];
// cspell:enable

describe('다음 큰 숫자', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toBe(expected);
  });
});
