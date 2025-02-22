/*
 * qr code
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181903
 */
function solution(q: number, r: number, code: string) {
  let answer = '';

  answer = [...code].filter((_, i) => i % q === r).join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3, 1, 'qjnwezgrpirldywt'));
console.log(solution(1, 0, 'programmers'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
