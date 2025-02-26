/*
 * rny_string
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181863
 */
function solution(rny_string: string) {
  return rny_string.replace(/m/g, 'rn');
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('masterpiece'));

console.log(solution('programmers'));

console.log(solution('jerry'));

console.log(solution('burn'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
