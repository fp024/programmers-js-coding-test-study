import { describe, expect, test } from 'vitest';
import solution from './exam023-12906';

describe('같은 숫자는 싫어', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([1, 1, 3, 3, 0, 1, 1])) //
      .toEqual([1, 3, 0, 1]);
    expect(solution([4, 4, 4, 3, 3])) //
      .toEqual([4, 3]);
  });
});
