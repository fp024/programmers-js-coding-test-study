import { describe, expect, test } from 'vitest';
import solution from './exam018-77884';

describe('약수의 개수와 덧셈', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(13, 17)) //
      .toBe(43);
    expect(solution(24, 27)) //
      .toBe(52);
  });
});
