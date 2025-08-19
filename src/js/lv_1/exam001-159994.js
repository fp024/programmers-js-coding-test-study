import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 카드 뭉치
 *   https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
/* === [문제 풀이 전략] ===
  이번에는 원형 큐를 구현해서 적용해보았는데 생각보다 잘된 것 같다.
*/

/**
 * 원형 큐
 *
 * @param {string[]} cards1 - 카드뭉치 1
 * @param {string[]} cards2 - 카드뭉치 2
 * @param {string[]} cards2 - 만들 단어 목록
 * @returns {string} 문장을 만들 수 있는지 여부 "Yes" or "No"
 */
class Queue {
  /** @type {number} */ #front = -1;
  /** @type {number} */ #rear = -1;
  /** @type {any[]} */ #data = [];
  /** @type {number} */ #maxSize;
  /** @type {number} */ #size;

  constructor(maxSize) {
    this.#maxSize = maxSize;
    this.#size = 0;
  }

  /**
   * 큐가 가득 찻는지 여부
   * @return {boolean}
   */
  isFull() {
    return this.#size === this.#maxSize;
  }

  /**
   * 큐가 비었는지 여부
   * @return {boolean}
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * 큐에 데이터 넣기
   * @param {number} item
   * @return {void}
   */
  push(item) {
    if (this.isFull()) {
      throw Error('Queue is Full!');
    }
    this.#front = ++this.#front % this.#maxSize;
    this.#data[this.#front] = item;
    this.#size++;
  }
  /**
   * 큐에서 데이터 빼기
   * @return {number}
   */
  pop() {
    if (this.isEmpty()) {
      throw Error('Queue is Empty!');
    }
    this.#size--;
    this.#rear = ++this.#rear % this.#maxSize;
    return this.#data[this.#rear];
  }

  /**
   * 큐에서 데이터 확인
   * @return {number | null}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.#data[(this.#rear + 1) % this.#maxSize];
  }

  toString() {
    return (
      `front: ${this.#front}\n` +
      `rear: ${this.#rear}\n` +
      `size: ${this.#size}\n` +
      `maxSize: ${this.#maxSize}\n` +
      `data: ${this.#data}`
    );
  }
}

function solution(cards1, cards2, goal) {
  const cards1Queue = new Queue(cards1.length);
  cards1.forEach((item) => cards1Queue.push(item));

  const cards2Queue = new Queue(cards2.length);
  cards2.forEach((item) => cards2Queue.push(item));

  const goalQueue = new Queue(goal.length);
  goal.forEach((item) => goalQueue.push(item));

  while (!goalQueue.isEmpty()) {
    const word = goalQueue.peek();

    if (word === cards1Queue.peek()) {
      cards1Queue.pop();
      goalQueue.pop();
    } else if (word === cards2Queue.peek()) {
      cards2Queue.pop();
      goalQueue.pop();
    } else {
      break;
    }
  }

  return goalQueue.isEmpty() ? 'Yes' : 'No';
}

export { Queue };
export default solution;

/* ========== [단순 실행 테스트]  ========== */
// cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(
    solution(
      ['i', 'drink', 'water'], //
      ['want', 'to'],
      ['i', 'want', 'to', 'drink', 'water']
    )
  );
  console.log(
    solution(
      ['i', 'water', 'drink'], //
      ['want', 'to'],
      ['i', 'want', 'to', 'drink', 'water']
    )
  );
}
// === 문제 후기 ===
// 원형 큐를 만들어서 해봤는데,
// ES2022 환경에서는 클래스 만들기가 쉬워져서,
// 좀 편했다 😊👍
//
// 프로그래머스 제출시도 잘 처리된다.
//
