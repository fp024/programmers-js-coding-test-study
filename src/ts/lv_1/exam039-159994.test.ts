import solution from './exam039-159994';
import solution_a from './exam039-159994';

const TEST_CASES = [
  {
    cards1: ['i', 'drink', 'water'],
    cards2: ['want', 'to'],
    goal: ['i', 'want', 'to', 'drink', 'water'],
    expected: 'Yes',
  },
  {
    cards1: ['i', 'water', 'drink'],
    cards2: ['want', 'to'],
    goal: ['i', 'want', 'to', 'drink', 'water'],
    expected: 'No',
  },
  {
    cards1: ['a', 'b', 'c'],
    cards2: ['d', 'e', 'f'],
    goal: ['a', 'd', 'f'],
    expected: 'No',
  },
];

describe('카드 뭉치', () => {
  test.each(TEST_CASES)('기본 테스트 케이스 검증', ({ cards1, cards2, goal, expected }) => {
    expect(solution(cards1, cards2, goal)).toBe(expected);
  });
});

describe('카드 뭉치 - 다른 사람 풀이', () => {
  test.each(TEST_CASES)('기본 테스트 케이스 검증', ({ cards1, cards2, goal, expected }) => {
    expect(solution_a(cards1, cards2, goal)).toBe(expected);
  });
});
