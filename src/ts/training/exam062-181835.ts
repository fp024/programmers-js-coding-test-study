/*
 * 조건에 맞게 수열 변환하기 3
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181835
 */
function solution(arr: number[], k: number) {
  let answer: number[] = [];

  if (k % 2 === 0) {
    answer = arr.map((n) => n + k);
  } else {
    answer = arr.map((n) => n * k);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 3, 100, 99, 98], 3));

console.log(solution([1, 2, 3, 100, 99, 98], 2));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
