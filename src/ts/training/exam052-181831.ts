/*
 * 특별한 이차원 배열 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181831
 */
function solution(arr: number[][]) {
  let answer = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        answer = 0;
        break;
      }
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
);

console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
