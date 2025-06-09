import solution from './exam001-12939';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: '1 2 3 4',
    expected: '1 4',
  },
  {
    s: '-1 -2 -3 -4',
    expected: '-4 -1',
  },
  {
    s: '-1 -1',
    expected: '-1 -1',
  },
];
// cspell:enable

describe('최댓값과 최솟값', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toBe(expected);
  });
});
