import { describe, expect, test } from 'vitest';
import solution from './exam035-134240';

describe('푸드 파이트 대회', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([1, 3, 4, 6])) //
      .toBe('1223330333221');
    expect(solution([1, 7, 1, 2])) //
      .toBe('111303111');
  });
});
