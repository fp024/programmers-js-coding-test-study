import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 미로 탈출
 *   https://school.programmers.co.kr/learn/courses/30/lessons/159993
 */

/*
   문제 풀이 전략
    ...
*/

/**
 * 원형 큐
 */
export class Queue<T> {
  private front: number = -1; // 데이터가 나가는 위치 (pop)
  private rear: number = -1; // 데이터가 들어오는 위치 (push)
  private data: T[] = [];
  private readonly maxSize: number;
  private size;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.size = 0;
  }

  /**
   * 큐가 가득 찼는지 여부
   */
  isFull() {
    return this.size === this.maxSize;
  }

  /**
   * 큐가 비었는지 여부
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 큐에 데이터 넣기
   */
  push(item: T) {
    if (this.isFull()) {
      throw Error('Queue is Full!');
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.data[this.rear] = item;
    this.size++;
  }
  /**
   * 큐에서 데이터 빼기
   */
  pop() {
    if (this.isEmpty()) {
      throw Error('Queue is Empty!');
    }

    this.front = (this.front + 1) % this.maxSize;
    const item = this.data[this.front];
    this.size--;
    return item;
  }

  /**
   * 큐에서 데이터 확인
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[(this.front + 1) % this.maxSize];
  }

  toString() {
    return (
      `front: ${this.front}\n` +
      `rear: ${this.rear}\n` +
      `size: ${this.size}\n` +
      `maxSize: ${this.maxSize}\n` +
      `data: ${this.data}`
    );
  }
}

function solution(maps: string[]) {
  // 큐에 넣을 `방문 정보`가 보드 크기를 벗어날일은 없을 것 같다. 😅
  const queue = new Queue<any>(maps[0].length * maps.length);

  let answer = 0;
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(
    solution([
      'SOOOL', //
      'XXXXO',
      'OOOOO',
      'OXXXX',
      'OOOOE',
    ])
  );

  console.log(
    solution([
      'LOOXS', //
      'OOOOX',
      'OOOOO',
      'OOOOO',
      'EOOOO',
    ])
  );
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
