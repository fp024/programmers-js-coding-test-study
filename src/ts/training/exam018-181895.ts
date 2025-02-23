/*
 * 배열 만들기 3
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181895
 */
function solution(arr: number[], intervals: number[][]) {
  const answer: number[] = [];

  intervals.forEach(([a, b]) => {
    answer.push(...arr.slice(a, b + 1));
  });

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
