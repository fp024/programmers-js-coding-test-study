/*
 * n보다 커질 때까지 더하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181884
 */
function solution(numbers: number[], n: number) {
  let answer = 0;
  let sum = 0;

  for (const num of numbers) {
    sum += num;
    if (sum > n) {
      break;
    }
  }

  answer = sum;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
