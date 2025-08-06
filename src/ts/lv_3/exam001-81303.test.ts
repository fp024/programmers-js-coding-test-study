import { describe, expect, test } from 'vitest';
import solution from './exam001-81303';
import solution_a from './exam001-81303-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    n: 8,
    k: 2,
    cmd: [
      'D 2', //
      'C',
      'U 3',
      'C',
      'D 4',
      'C',
      'U 2',
      'Z',
      'Z',
    ],
    expected: 'OOOOXOOO',
  },
  {
    n: 8,
    k: 2,
    cmd: [
      'D 2', //
      'C',
      'U 3',
      'C',
      'D 4',
      'C',
      'U 2',
      'Z',
      'Z',
      'U 1',
      'C',
    ],
    expected: 'OOXOXOOO',
  },
];

// cspell:enable
describe('표 편집', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, k, cmd, expected }) => {
    expect(solution(n, k, cmd)).toEqual(expected);
  });

  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트 케이스 검증 - 연결리스트에 전/후 인덱스 활용',
    ({ n, k, cmd, expected }) => {
      expect(solution_a(n, k, cmd)).toEqual(expected);
    }
  );
});
