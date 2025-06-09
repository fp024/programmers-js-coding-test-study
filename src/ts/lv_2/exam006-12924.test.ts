import solution from './exam006-12924';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 15,
    expected: 4,
  },
];
// cspell:enable

describe('숫자의 표현', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution(n)).toEqual(expected);
  });
});
