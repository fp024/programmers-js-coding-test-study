import solution from './exam049-133499';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    babbling: ['aya', 'yee', 'u', 'maa'],
    expected: 1,
  },
  {
    babbling: ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'],
    expected: 2,
  },
];

const EXTRA_TEST_CASES = [
  {
    babbling: ['yemayema'],
    expected: 1,
  },
  {
    babbling: ['yemamayema'],
    expected: 0,
  },
];
// cspell:enable

describe('옹알이 (2)', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ babbling, expected }) => {
    expect(solution(babbling)).toBe(expected);
  });
  test.each(EXTRA_TEST_CASES)('추가 테스트 케이스 검증', ({ babbling, expected }) => {
    expect(solution(babbling)).toBe(expected);
  });
});
