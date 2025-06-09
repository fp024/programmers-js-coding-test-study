import solution from './exam055-258712';
import solution_a from './exam055-258712-a';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    friends: ['muzi', 'ryan', 'frodo', 'neo'],
    string: [
      'muzi frodo',
      'muzi frodo',
      'ryan muzi',
      'ryan muzi',
      'ryan muzi',
      'frodo muzi',
      'frodo ryan',
      'neo muzi',
    ],
    expected: 2,
  },
  {
    friends: ['joy', 'brad', 'alessandro', 'conan', 'david'],
    string: [
      'alessandro brad',
      'alessandro joy',
      'alessandro conan',
      'david alessandro',
      'alessandro david',
    ],
    expected: 4,
  },
  {
    friends: ['a', 'b', 'c'],
    string: [
      'a b', //
      'b a',
      'c a',
      'a c',
      'a c',
      'c a',
    ],
    expected: 0,
  },
];
// cspell:enable

describe('가장 많이 받은 선물', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ friends, string, expected }) => {
    expect(solution(friends, string)).toBe(expected);
  });
});

describe('가장 많이 받은 선물 - AI 코드 리뷰', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ friends, string, expected }) => {
    expect(solution_a(friends, string)).toBe(expected);
  });
});
