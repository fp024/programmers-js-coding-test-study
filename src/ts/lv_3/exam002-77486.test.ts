import { describe, expect, test } from 'vitest';
import solution from './exam002-77486';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    enroll: ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    referral: ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    seller: ['young', 'john', 'tod', 'emily', 'mary'],
    amount: [12, 4, 2, 5, 10],
    expected: [360, 958, 108, 0, 450, 18, 180, 1080],
  },
  {
    enroll: ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    referral: ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    seller: ['sam', 'emily', 'jaimie', 'edward'],
    amount: [2, 3, 5, 4],
    expected: [0, 110, 378, 180, 270, 450, 0, 0],
  },
];

// cspell:enable
describe('다단계 칫솔 판매', () => {
  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트 케이스 검증',
    ({ enroll, referral, seller, amount, expected }) => {
      expect(solution(enroll, referral, seller, amount)).toEqual(expected);
    }
  );
});
