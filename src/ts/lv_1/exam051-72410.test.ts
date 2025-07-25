import { describe, expect, test } from 'vitest';
import solution from './exam051-72410';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    new_id: '...!@BaT#*..y.abcdefghijklm',
    expected: 'bat.y.abcdefghi',
  },
  {
    new_id: 'z-+.^.',
    expected: 'z--',
  },
  {
    new_id: '=.=',
    expected: 'aaa',
  },
  {
    new_id: '123_.def',
    expected: '123_.def',
  },
  {
    new_id: 'abcdefghijklmn.p',
    expected: 'abcdefghijklmn',
  },
];

// cspell:enable

describe('신규 아이디 추천', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ new_id, expected }) => {
    expect(solution(new_id)).toBe(expected);
  });
});
