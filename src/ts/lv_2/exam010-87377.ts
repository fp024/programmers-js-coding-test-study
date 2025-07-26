import { isStandalone } from '../../utils/testHelper.js';
/**
 * 교점에 별 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/87377
 */
/** 좌표 */
interface Point {
  x: number;
  y: number;
}

/** 선 방정식 Ax + By + C = 0 의 계수 타입 */
interface LineEquation {
  A: number;
  B: number;
  C: number;
}

/**
    === 선 방정식으로 부터 교차점 얻기 ===
    1. 공통 분모: (a1 * b2) - (b1 * a2)
    2. x = ((b1 * c2) - (c1 * b2)) / 공통 분모
    3. y = ((a2 * c1) - (a1 * c2)) / 공통 분모
*/
function getIntersection(l1: LineEquation, l2: LineEquation): Point | null {
  const commonDenominator = l1.A * l2.B - l1.B * l2.A;

  // 분모가 0이면 교점이 없거나 무수히 많음.
  if (commonDenominator === 0) {
    return null;
  }

  const xNumerator = l1.B * l2.C - l1.C * l2.B; // x의 분자
  const yNumerator = l2.A * l1.C - l1.A * l2.C; // y의 분자

  if (xNumerator % commonDenominator !== 0) {
    return null;
  }

  if (yNumerator % commonDenominator !== 0) {
    return null;
  }

  const x = xNumerator / commonDenominator;
  const y = yNumerator / commonDenominator;
  return { x, y };
}

/** 가장 작은 좌표 찾기 */
function getMinimumPoint(points: Point[]): Point {
  let minX = Infinity;
  let minY = Infinity;

  for (let { x, y } of points) {
    if (x < minX) {
      minX = x;
    }
    if (y < minY) {
      minY = y;
    }
  }
  return { x: minX, y: minY };
}

/** 가장 큰 좌표 찾기 */
function getMaximumPoint(points: Point[]): Point {
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let { x, y } of points) {
    if (x > maxX) {
      maxX = x;
    }
    if (y > maxY) {
      maxY = y;
    }
  }
  return { x: maxX, y: maxY };
}

/** 💡 문재 해결 함수 💡 */
function solution(line: number[][]) {
  const intersectionPoints: Point[] = [];
  for (let i = 0; i < line.length; i++) {
    for (let j = i; j < line.length; j++) {
      const intersection = getIntersection(
        { A: line[i][0], B: line[i][1], C: line[i][2] },
        { A: line[j][0], B: line[j][1], C: line[j][2] }
      );

      if (intersection) {
        intersectionPoints.push(intersection);
      }
    }
  }

  const minPoint = getMinimumPoint(intersectionPoints);
  const maxPoint = getMaximumPoint(intersectionPoints);

  const width = maxPoint.x - minPoint.x + 1;
  const height = maxPoint.y - minPoint.y + 1;

  const arr = Array.from(
    { length: height }, //
    () => Array.from({ length: width }, () => '.')
  );

  // ✨ 배열에 별 표시
  for (const p of intersectionPoints) {
    const x = p.x - minPoint.x;
    const y = maxPoint.y - p.y;
    arr[y][x] = '*';
  }

  const answer: string[] = [];

  for (let row of arr) {
    answer.push(row.join(''));
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(
    solution([
      [2, -1, 4],
      [-2, -1, 4],
      [0, -1, 1],
      [5, -8, -12],
      [5, 8, 12],
    ])
  );

  console.log(
    solution([
      [0, 1, -1],
      [1, 0, -1],
      [1, 0, 1],
    ])
  );

  console.log(
    solution([
      [1, -1, 0],
      [2, -1, 0],
    ])
  );

  console.log(
    solution([
      [1, -1, 0],
      [2, -1, 0],
      [4, -1, 0],
    ])
  );
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
// C++로 먼저 해본 내용을 TS로 옮겨봤다.
// TS로 진행하니 확실히 편하게 느껴짐 😂👍
// - https://github.com/fp024/programmers-c-coding-test-study/blob/master/lv02/Exam002_87377.cpp
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
