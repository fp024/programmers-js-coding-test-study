import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 바탕화면 정리
 *   https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */
function solution(wallpaper: string[]) {
  const desktop: number[][] = Array.from({ length: wallpaper.length }, () =>
    Array(wallpaper[0].length).fill(0)
  );

  const height = wallpaper.length;
  const width = wallpaper[0].length;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (wallpaper[r][c] === '#') {
        desktop[r][c] = 1;
      }
    }
  }

  // 최소 r,w, 최대 r,w 좌표를 구하면 될 것 같음...🤔
  // 드래그 영역을 결정하기 위한 경계값 계산
  //   - 최소 r을 구할 때는 right-bottom의 r 좌표보다 작은, 아이콘이 위치한 최소 r
  //   - 최소 w을 구할 때는 right-bottom의 w 좌표보다 작은, 아이콘이 위치한 최소 w
  //   - 최대 r을 구할 때는 left-top의 r 좌표보다 큰, 아이콘이 위치한 최대 r
  //   - 최대 w을 구할 때는 left-top의 w 좌표보다 큰, 아이콘이 위치한 최대 w
  let minRow = height - 1;
  let minCol = width - 1;
  let maxRow = 0;
  let maxCol = 0;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (desktop[r][c] === 1) {
        minRow = Math.min(minRow, r);
        minCol = Math.min(minCol, c);
        maxRow = Math.max(maxRow, r);
        maxCol = Math.max(maxCol, c);
      }
    }
  }

  // 💡 다음 대각선 방향으로 한 칸까지 드래그를 해야 블럭이 싸인다고 간주해서 mxRow, maxCol에 1씩 더해주었다.
  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  // [
  //   [ 0, 1, 0, 0, 0 ],
  //   [ 0, 0, 1, 0, 0 ],
  //   [ 0, 0, 0, 1, 0 ]
  // ]

  console.log(
    solution([
      '.#...', //
      '..#..',
      '...#.',
    ])
  );

  // [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  //   [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  // ]

  console.log(
    solution([
      '..........', //
      '.....#....',
      '......##..',
      '...##.....',
      '....#.....',
    ])
  );

  // [
  //   [0, 1, 1, 0, 0, 0, 1, 1, 0],
  //   [1, 0, 0, 1, 0, 1, 0, 0, 1],
  //   [1, 0, 0, 0, 1, 0, 0, 0, 1],
  //   [0, 1, 0, 0, 0, 0, 0, 1, 0],
  //   [0, 0, 1, 0, 0, 0, 1, 0, 0],
  //   [0, 0, 0, 1, 0, 1, 0, 0, 0],
  //   [0, 0, 0, 0, 1, 0, 0, 0, 0]
  // ]
  console.log(
    solution([
      '.##...##.', //
      '#..#.#..#',
      '#...#...#',
      '.#.....#.',
      '..#...#..',
      '...#.#...',
      '....#....',
    ])
  );

  console.log(
    solution([
      '..', //
      '#.',
    ])
  );
}

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   좌표간 거리 구하는 공식은 먼저 했던, 키패드 누르기에서 해결했던 방법과 동일한 것 같다.
//   (그런데, 풀고 보니... 결과상으로는 거리공식을 쓸 필요는 없었음..🤔)
//   맨허튼 좌표
//     https://school.programmers.co.kr/learn/courses/30/lessons/67256
//   일단은 최소 드레그 사각영역에서
//   top-left 좌표하고, bottom-right 좌표를 구해야하는데...
//
//   우선 문자열로 전달된 데이터를 좌표계로 바꿔둬야할 것 같긴하다.
//   일단 풀긴 했다. 그런데 점의 거리를 구하는 방식을 활용하진 않고,
//   전체 좌표 탐색을 해서 아이콘이 있는 최소 좌표하고 최대 좌표를 구하는 식으로 했다.
//   +1점 얻음...
//
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 분들 풀이를 보니, 나와 개념은 비슷한데, 고차함수로 코드를 더 깔끔하게 하셨다. 👍
//
export default solution;
