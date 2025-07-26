import { isStandalone } from '../../utils/testHelper.js';
/*
 * K번째 수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(array: number[], commands: number[][]) {
  return commands.map(
    ([i, j, k]) =>
      array
        .slice(i - 1, j) //
        .sort((a, b) => a - b)[k - 1]
  );
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(
    solution(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
  );
}

// === 문제 읽고 첫 느낌 ===
//   왠지... 예전에 JS로 풀었던 것 같은...
//   JS의 고차함수들을 사용하면 아주 쉽게 해결이 된다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
