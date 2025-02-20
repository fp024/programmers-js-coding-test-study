/*
 * 간단한 논리 연산
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181917
 */
function solution(x1, x2, x3, x4) {
  let answer = (x1 || x2) && (x3 || x4);
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(false, true, true, true));

export default solution;
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
