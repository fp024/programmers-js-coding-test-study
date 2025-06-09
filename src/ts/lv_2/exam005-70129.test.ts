import solution from './exam005-70129';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: '110010101001',
    expected: [3, 8],
  },
  {
    s: '01110',
    expected: [3, 3],
  },
  {
    s: '1111111',
    expected: [4, 1],
  },
];
// cspell:enable

describe('이진 변환 반복하기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toEqual(expected);
  });
});
