/*
 * 원하는 문자열 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181878
 */
function solution(myString: string, pat: string) {
  return +myString.toLowerCase().includes(pat.toLowerCase());
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('AbCdEfG', 'aBc'));

console.log(solution('aaAA', 'aaaaa'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
