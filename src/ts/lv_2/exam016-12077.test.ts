import { describe, expect, test } from 'vitest';
import solution from './exam016-12077';
import solution_a from './exam016-12077-a';

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
  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트는 통과하지만 효율성 실패',
    ({ phone_book, expected }) => {
      expect(solution(phone_book)).toEqual(expected);
    }
  );

  test.each(DEFAULT_TEST_CASES)('효율성 개선', ({ phone_book, expected }) => {
    expect(solution_a(phone_book)).toEqual(expected);
  });
});
