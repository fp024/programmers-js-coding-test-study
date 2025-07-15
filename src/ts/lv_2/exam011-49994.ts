/**
 * 방문 길이
 *   https://school.programmers.co.kr/learn/courses/30/lessons/49994
 */

/*
   문제 풀이 전략
   1. 좌상단을 (0,0),  우하단을 (10,10)으로 좌표계를 변환
   2. 명령어 들에 대한 변환 배열
   3. 영역을 벗어나는지 체크하는 함수
   4. 중복 제거를 위해 고유ID를 만들어서 Set에 넣는다.
*/

/** 좌표 */
interface Point {
  x: number;
  y: number;
}

/** 이동 명령 */
const commandDirs: Record<string, Point> = {
  U: { x: 0, y: 1 }, //
  D: { x: 0, y: -1 },
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
};

interface Path {
  prev: Point;
  next: Point;
}

// Path 객체에 대한 고유 ID를 생성하는 함수
function getPathId(path: Path): string {
  // x, y 좌표를 결합하여 고유한 문자열 ID 생성
  return `(${path.prev.x},${path.prev.y}):(${path.next.x},${path.next.y})`;
}

/** 포인트 이동 */
const movePoint = (point: Point, dirPoint: Point): Point => {
  return { x: point.x + dirPoint.x, y: point.y + dirPoint.y };
};

/** 새로운 좌표로 이동 불가능한지 체크 */
const isMovable = (newPoint: Point) =>
  newPoint.x >= -5 && newPoint.y <= 5 && newPoint.x <= 5 && newPoint.y >= -5;

function solution(dirs: string) {
  let p: Point = { x: 0, y: 0 };
  /** 이미 방문했던 좌표인지 체크용도의 Set */
  const moveSet = new Set<string>();
  let moveCount = 0;

  for (let dir of dirs) {
    const dirPoint = commandDirs[dir];
    const newPoint = movePoint(p, dirPoint);
    if (!isMovable(newPoint)) {
      continue;
    }

    if (
      !moveSet.has(getPathId({ prev: p, next: newPoint })) &&
      !moveSet.has(getPathId({ prev: newPoint, next: p }))
    ) {
      moveCount++;
      moveSet.add(getPathId({ prev: p, next: newPoint }));
      moveSet.add(getPathId({ prev: newPoint, next: p }));
    }

    p = newPoint;
  }

  return moveCount;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('ULURRDLLU'));

  console.log(solution('LULLLLLLU'));

  console.log(solution('ULR'));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
