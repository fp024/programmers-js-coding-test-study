import { describe, expect, test } from 'vitest';
import solution from './exam016-12077';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    phone_book: [
      '119', //
      '97674223',
      '1195524421',
    ],
    expected: false,
  },
  {
    phone_book: [
      '123', //
      '456',
      '789',
    ],
    expected: true,
  },
  {
    phone_book: [
      '123', //
      '456',
      '789',
    ],
    expected: true,
  },
];

// cspell:enable
describe('전화번호 목록', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ phone_book, expected }) => {
    expect(solution(phone_book)).toEqual(expected);
  });
});
