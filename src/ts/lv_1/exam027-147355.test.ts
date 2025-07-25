import { describe, expect, test } from 'vitest';
import solution from './exam027-147355';

describe('크기가 작은 부분문자열', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('3141592', '271')) //
      .toBe(2);
    expect(solution('500220839878', '7')) //
      .toBe(8);
    expect(solution('10203', '15')) //
      .toBe(3);
  });
});
