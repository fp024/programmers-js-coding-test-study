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
class Queue<T> {
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
      throw new Error('Queue is Full!');
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
      throw new Error('Queue is Empty!');
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

// 좌표 상태 타입: 큐에 저장할 정보
type PointState = {
  y: number;
  x: number;
  onLever: boolean;
  times: number;
};

// 이동 가능한 좌표인지 판단
function isValidMove(ny: number, nx: number, row: number, col: number, maps: string[]) {
  return (
    0 <= ny && //
    ny < row &&
    0 <= nx &&
    nx < col &&
    maps[ny][nx] !== 'X'
  );
}

// 방문한 적이 없으면 큐에 넣고 방문 여부 표시
function appendToQueue(
  ny: number,
  nx: number,
  onLever: boolean,
  times: number,
  visited: boolean[][][],
  queue: Queue<PointState>
) {
  const k = onLever ? 1 : 0;
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    queue.push({ y: ny, x: nx, onLever: onLever, times: times + 1 });
  }
}

function solution(maps: string[]) {
  const ROW = maps.length;
  const COL = maps[0].length;

  /*
    [y][x][0]: 레버를 당기기 전 방문 여부
    [y][x][1]: 레버를 당긴 후 방문 여부
  */
  const visited: boolean[][][] = Array.from(new Array(ROW), () =>
    new Array(COL).fill(false).map(() => new Array(2).fill(false))
  );

  // 큐에 넣을 `방문 정보`가 보드 크기를 벗어날일은 없을 것 같다. 😅
  const queue = new Queue<PointState>(ROW * COL);
  // 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  let endY = -1;
  let endX = -1;

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      // 시작점 찾아 큐에 넣음
      if (maps[i][j] === 'S') {
        queue.push({ y: i, x: j, onLever: false, times: 0 });
        visited[i][j][0] = true;
      }

      // 도착점 좌표 설정
      if (maps[i][j] === 'E') {
        endY = i;
        endX = j;
      }
    }
  }

  while (!queue.isEmpty()) {
    const { y, x, onLever, times } = queue.pop(); // 큐에서 좌표와 이동 횟수를 꺼냄

    // 도착점에 도달하면 결과 반환
    if (y === endY && x === endX && onLever) {
      return times;
    }

    // 4-방향 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 이동 가능한 좌표일 때만 큐에 넣음
      if (!isValidMove(ny, nx, ROW, COL, maps)) {
        continue;
      }

      // 다음 이동 지점이 레버인 경우
      if (maps[ny][nx] === 'L') {
        appendToQueue(ny, nx, true, times, visited, queue);
      } else {
        // 다음 이동지점이 레버가 아닌 경우
        // 💡 nx, ny는 미래값이지만 onLever는 현재 값이다.
        // 현재값 부터 레버가 설정되었으면 쭈욱 레버 활성화 상태가 되고,
        // 현재값이 레버 활성화상태가 아니면 쭈욱 레버 활성화 상태가 아니게 된다.
        appendToQueue(ny, nx, onLever, times, visited, queue);
      }
    }
  }

  // 도착점에 도달하지 못한 경우
  return -1;
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
//   Lv2 넘어오고 나서부터는 처음부터 스스로 풀기가 정말 힘들어졌다.. 진짜 안풀리네...😂
//   JS 풀이 핵심 로직을 보고, 변수명이나 약간의 로직을 이해하기 쉽게만 TS로 바꿔봤다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export { Queue };
export default solution;
