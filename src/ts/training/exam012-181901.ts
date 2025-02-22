/*
 * 배열 만들기 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181901
 */
function solution(n: number, k: number) {
  const answer: number[] = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(10, 3));
console.log(solution(15, 5));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
