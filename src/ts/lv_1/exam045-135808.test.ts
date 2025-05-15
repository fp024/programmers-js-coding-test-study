import solution from './exam045-135808';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    k: 3, // 문제를 풀어봤을 때, 1 ≤ score[i] ≤ k 로 정해지므로 k 매개변수는 사용하지 않게되었다. 😅
    m: 4,
    score: [1, 2, 3, 1, 2, 3, 1],
    expected: 8,
  },
  {
    k: 4,
    m: 3,
    score: [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
    expected: 33,
  },
];
// cspell:enable

describe('과일 장수', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ k, m, score, expected }) => {
    expect(solution(k, m, score)).toBe(expected);
  });
});
