/*
 * 수열과 구간 쿼리 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181883
 */
function solution(arr: number[], queries: number[][]) {
  let answer: number[] = [];

  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  });

  answer = arr;
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
