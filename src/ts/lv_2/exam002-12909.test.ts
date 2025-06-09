import solution from './exam002-12909';
import solution_a from './exam002-12909-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: '()()',
    expected: true,
  },
  {
    s: '(())()',
    expected: true,
  },
  {
    s: ')()(',
    expected: false,
  },
  {
    s: '(()(',
    expected: false,
  },
  {
    s: '((((',
    expected: false,
  },
  {
    s: '))))',
    expected: false,
  },
];
// cspell:enable

describe('올바른 괄호', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toBe(expected);
  });
});

describe('올바른 괄호 - AI의 가이드 후 수정', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution_a(s)).toBe(expected);
  });
});
