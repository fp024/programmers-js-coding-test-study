import solution from './exam054-250137';
import solution_a from './exam054-250137-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    bandage: [5, 1, 5],
    health: 30,
    attacks: [
      [2, 10],
      [9, 15],
      [10, 5],
      [11, 5],
    ],
    expected: 5,
  },
  {
    bandage: [3, 2, 7],
    health: 20,
    attacks: [
      [1, 15],
      [5, 16],
      [8, 6],
    ],
    expected: -1,
  },
  {
    bandage: [4, 2, 7],
    health: 20,
    attacks: [
      [1, 15],
      [5, 16],
      [8, 6],
    ],
    expected: -1,
  },
  {
    bandage: [1, 1, 1],
    health: 5,
    attacks: [
      [1, 2],
      [3, 2],
    ],
    expected: 3,
  },
];
// cspell:enable

describe('[PCCP 기출문제] 1번 / 붕대 감기', () => {
  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트 케이스 검증',
    ({ bandage, health, attacks, expected }) => {
      expect(solution(bandage, health, attacks)).toBe(expected);
    }
  );
});

describe('[PCCP 기출문제] 1번 / 붕대 감기 - 내부반복 최적화 AI', () => {
  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트 케이스 검증',
    ({ bandage, health, attacks, expected }) => {
      expect(solution_a(bandage, health, attacks)).toBe(expected);
    }
  );
});
