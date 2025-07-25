import { describe, expect, test } from 'vitest';
import solution from './exam021-12918';

describe('문자열 다루기 기본', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('a234')) //
      .toBeFalsy();
    expect(solution('1234')) //
      .toBeTruthy();
  });
  test('길이가 4 또는 8이여야한다.', () => {
    expect(solution('123')) //
      .toBeFalsy();
    expect(solution('12345')) //
      .toBeFalsy();
    expect(solution('123456789')) //
      .toBeFalsy();
  });
});
