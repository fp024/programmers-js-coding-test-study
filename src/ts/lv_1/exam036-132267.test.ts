import { describe, expect, test } from 'vitest';
import solution from './exam036-132267';

describe('콜라 문제', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(2, 1, 20)) //
      .toBe(19);
    expect(solution(3, 1, 20)) //
      .toBe(9);
  });
});
