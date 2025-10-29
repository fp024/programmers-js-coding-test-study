import { describe, expect, test } from 'vitest';
import solution, { Queue } from './exam015-159993';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    maps: [
      'SOOOL', //
      'XXXXO',
      'OOOOO',
      'OXXXX',
      'OOOOE',
    ],
    expected: 16,
  },
  {
    maps: [
      'LOOXS', //
      'OOOOX',
      'OOOOO',
      'OOOOO',
      'EOOOO',
    ],
    expected: -1,
  },
];

// cspell:enable
describe('미로 탈출', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ maps, expected }) => {
    expect(solution(maps)).toEqual(expected);
  });
});

// 예전에 JS로 만들어본 원형 큐 TS로 변환한 내용 테스트
describe('Queue 테스트', () => {
  test('원형 큐 테스트', () => {
    const queue = new Queue<number>(3);

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.isFull()).toBeFalsy();

    queue.push(1);
    queue.push(2); // NOSONAR
    queue.push(3); // NOSONAR

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.isFull()).toBeTruthy();

    expect(queue.peek()).toBe(1);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.isFull()).toBeFalsy();
  });
});
