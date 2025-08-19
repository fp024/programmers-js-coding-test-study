import { describe, expect, test } from 'vitest';
import solution from './exam001-159994.js';
import { Queue } from './exam001-159994.js';

// cspell:disable
const DEFAULT_TEST_CASES = [
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
];

describe('카드 뭉치', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ cards1, cards2, goal, expected }) => {
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });
});

describe('Queue 테스트', () => {
  test(`큐 데이터 넣고 빼기`, () => {
    const queue = new Queue(3);
    expect(queue.isEmpty()).toBeTruthy();

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.isFull()).toBeTruthy();

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);

    expect(queue.isEmpty()).toBeTruthy();

    queue.push(4);
    queue.push(5);
    queue.push(6);

    expect(queue.isFull()).toBeTruthy();

    expect(queue.peek()).toBe(4);
    expect(queue.pop()).toBe(4);
    expect(queue.pop()).toBe(5);
    expect(queue.pop()).toBe(6);

    expect(queue.isEmpty()).toBeTruthy();

    console.log(queue.toString());
  });
});
