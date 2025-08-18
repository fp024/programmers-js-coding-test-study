import { describe, expect, test } from 'vitest';
import solution from './exam001-42586.js';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    progresses: [93, 30, 55],
    speeds: [1, 30, 5],
    expected: [2, 1],
  },
  {
    progresses: [95, 90, 99, 99, 80, 99],
    speeds: [1, 1, 1, 1, 1, 1],
    expected: [1, 3, 2],
  },
];

describe('기능 개발', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ progresses, speeds, expected }) => {
    expect(solution(progresses, speeds)).toEqual(expected);
  });
});
