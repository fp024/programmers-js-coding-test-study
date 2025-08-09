import { describe, expect, test } from 'vitest';
import solution from './exam038-138477';
import solution_a from './exam038-138477-a';

// 테스트 데이터 분리
const testCases = [
  {
    name: '기본 테스트 케이스 1',
    k: 3,
    scores: [10, 100, 20, 150, 1, 100, 200],
    expected: [10, 10, 10, 20, 20, 100, 100],
  },
  {
    name: '기본 테스트 케이스 2',
    k: 4,
    scores: [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000],
    expected: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300],
  },
  {
    name: '추가 테스트 케이스',
    k: 3,
    scores: [100, 30, 40, 150, 300, 200, 200],
    expected: [100, 30, 30, 40, 100, 150, 200],
  },
];

// 각 솔루션에 대해 모든 테스트 케이스 실행
describe('명예의 전당 (1) - 기본 솔루션', () => {
  testCases.forEach((testCase) => {
    // eslint-disable-next-line vitest/valid-title
    test(testCase.name, () => {
      expect(solution(testCase.k, testCase.scores)).toEqual(testCase.expected);
    });
  });
});

describe('명예의 전당 (1) - 개선된 솔루션', () => {
  testCases.forEach((testCase) => {
    // eslint-disable-next-line vitest/valid-title
    test(testCase.name, () => {
      expect(solution_a(testCase.k, testCase.scores)).toEqual(testCase.expected);
    });
  });
});
