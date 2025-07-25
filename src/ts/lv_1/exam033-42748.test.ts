import { describe, expect, test } from 'vitest';
import solution from './exam033-42748';

describe('K번째 수', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(
      solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
          [2, 5, 3],
          [4, 4, 1],
          [1, 7, 3],
        ]
      )
    ) //
      .toEqual([5, 6, 3]);
  });
});
