/*
 * 이차원 배열 대각선 순회하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181829
 */
function solution(board: number[][], k: number) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);

// === 문제 읽고 첫 느낌 ===
//   이상하게 어렵게 느껴진다.. 😂, 그런데 이거 +5점 받았다.. 이유는 모르겠지만..😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
