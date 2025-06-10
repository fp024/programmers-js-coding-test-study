import solution from './exam008-12973';
import solution_a from './exam008-12973-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: 'baabaa',
    expected: 1,
  },
  {
    s: 'cdcd',
    expected: 0,
  },
];
// cspell:enable

describe('짝지어 제거하기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toBe(expected);
  });
});

describe('짝지어 제거하기 - 스택 쓰라고 해서 다시 풀음 😅', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution_a(s)).toBe(expected);
  });
});
