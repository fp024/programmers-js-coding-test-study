/*
 * 문자열 바꿔서 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181864
 */
function solution(myString: string, pat: string) {
  return +[...myString]
    .map((c) => (c === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat);
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('ABBAA', 'AABB'));

console.log(solution('ABAB', 'ABAB'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
