/*
 * 0 떼기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181847
 */
function solution(n_str: string) {
  let answer = n_str.replace(/^0+/, '');
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('0010'));

console.log(solution('854020'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
