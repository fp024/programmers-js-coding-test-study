/*
 * 두 정수 사이의 합
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12912
 */
function solution(a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  const answer = sum;
  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
