import solution from './exam009-12945';
import solution_a from './exam009-12945-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 3,
    expected: 2,
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

describe('피보나치 수 - 재귀를 반복으로 + 나누기 연산을 미리 해줌', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, expected }) => {
    expect(solution_a(n)).toBe(expected);
  });
});
