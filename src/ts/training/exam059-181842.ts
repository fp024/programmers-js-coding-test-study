/*
 * 부분 문자열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181842
 */
function solution(str1: string, str2: string) {
  return +str2.includes(str1);
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('abc', 'aabcc'));

console.log(solution('tbt', 'tbbttb'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
