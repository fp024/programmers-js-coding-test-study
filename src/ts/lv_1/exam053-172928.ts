import { isStandalone } from '../../utils/testHelper.js';
/**
 * 공원 산책
 *   https://school.programmers.co.kr/learn/courses/30/lessons/172928
 */
function solution(park: string[], routes: string[]) {
  let answer: number[];

  const START = 'S';
  const BLOCK = 'X';

  const ROW_MAX = park.length - 1;
  const COL_MAX = park[0].length - 1;

  let currentLocation: Record<string, number> = { row: -1, col: -1 };
  const blockLocations = new Set();

  // 시작 위치, 장애물 위치 찾기
  for (let row = 0; row <= ROW_MAX; row++) {
    for (let col = 0; col <= COL_MAX; col++) {
      if (park[row][col] === START) {
        currentLocation.row = row;
        currentLocation.col = col;
      } else if (park[row][col] === BLOCK) {
        blockLocations.add(row + '_' + col);
      }
    }
  }

  // 명령에 따라 현재 위치 이동
  for (let route of routes) {
    const routeCommand = route.split(' ');
    const direction = routeCommand[0];
    const distance = Number(routeCommand[1]);

    if (direction === 'E') {
      if (currentLocation.col + distance > COL_MAX) {
        continue;
      }
      let isBlocked = false;
      for (let i = 1; i <= distance; i++) {
        if (blockLocations.has(currentLocation.row + '_' + (currentLocation.col + i))) {
          isBlocked = true;
        }
      }
      // 막히지 않았다면 현재 좌표를 업데이트한다.
      if (!isBlocked) {
        currentLocation.col += distance;
      }
    } else if (direction === 'W') {
      if (currentLocation.col - distance < 0) {
        continue;
      }
      let isBlocked = false;
      for (let i = 1; i <= distance; i++) {
        if (blockLocations.has(currentLocation.row + '_' + (currentLocation.col - i))) {
          isBlocked = true;
        }
      }
      if (!isBlocked) {
        currentLocation.col -= distance;
      }
    } else if (direction === 'S') {
      if (currentLocation.row + distance > ROW_MAX) {
        continue;
      }
      let isBlocked = false;
      for (let i = 1; i <= distance; i++) {
        if (blockLocations.has(currentLocation.row + i + '_' + currentLocation.col)) {
          isBlocked = true;
        }
      }
      if (!isBlocked) {
        currentLocation.row += distance;
      }
    } else if (direction === 'N') {
      if (currentLocation.row - distance < 0) {
        continue;
      }
      let isBlocked = false;
      for (let i = 1; i <= distance; i++) {
        if (blockLocations.has(currentLocation.row - i + '_' + currentLocation.col)) {
          isBlocked = true;
        }
      }
      if (!isBlocked) {
        currentLocation.row -= distance;
      }
    }
  }

  answer = [currentLocation.row, currentLocation.col];

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(
    solution(
      [
        'SOO', //
        'OOO',
        'OOO',
      ],
      [
        'E 2', //
        'S 2',
        'W 1',
      ]
    )
  );

  console.log(
    solution(
      [
        'SOO', //
        'OXX',
        'OOO',
      ],
      [
        'E 2', //
        'S 2',
        'W 1',
      ]
    )
  );

  console.log(
    solution(
      [
        'OSO', //
        'OOO',
        'OXO',
        'OOO',
      ],
      [
        'E 2', //
        'S 3',
        'W 1',
      ]
    )
  );
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   문자열을 숫자배열 좌표로 따로 바꾸진 않고,
//   1. 현재 좌표와 막힌좌표의 좌표를 저장
//      1-1. 현재좌표는 하나이므로 그대로 {row: x, col: x} 형식으로 객체로 저장
//      1-2. 막힌 좌표는 여러개이고 검색을 해야하므로, Set에다 문자열 형식으로 저장함 row_col 형식을 만들어 저장
//   2. 이동 명령 실행
//      2-1. 동서남북(E,W,S,N) 조건에 따라서 다음 조건 검사
//        - 좌표가 넘어가는지 검사 넘어가지 않는 다면 다음 검사
//        - 현재위치에서 이동이 필요한 좌표까지 막힌 좌표가 있는지 검사
//        - 위의 조건들이 통과하지 못했다면... 다음 명령으로 넘어감.
//      2-2. 조건 검사가 모두 통과했다면, 현재 위치를 이동 좌표로 저장
//
//   이동명령 실행부분이 코드가 괜히 길어지긴 했다. 😅
//   일단 +1점 맞고 통과는 했는데...
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 분들 풀이를 보니... 뭔지는 잘 모르겠지만 코드가 짧다.😅
//   방향에 대해서 좌표를 얼마큼 이동할지 Map으로 표현하셨는데,
//   { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }
//   나도 나중에 바꿔봐야겠다. 대단.👍👍
//
export default solution;
