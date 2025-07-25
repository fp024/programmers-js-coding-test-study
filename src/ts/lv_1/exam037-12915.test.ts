import { describe, expect, test } from 'vitest';
import solution from './exam037-12915';

describe('문자열 내 마음대로 정렬하기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(['sun', 'bed', 'car'], 1)) //
      .toEqual(['car', 'bed', 'sun']);
    expect(solution(['abce', 'abcd', 'cdx'], 2)) //
      .toEqual(['abcd', 'abce', 'cdx']);
  });
});
