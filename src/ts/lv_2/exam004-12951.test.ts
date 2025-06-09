import solution from './exam004-12951';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: '3people unFollowed me',
    expected: '3people Unfollowed Me',
  },
  {
    s: 'for the last week',
    expected: 'For The Last Week',
  },
];
// cspell:enable

describe('JadenCase 문자열 만들기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toBe(expected);
  });
});
