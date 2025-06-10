/**
 * 짝지어 제거하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */
function solution(s: string) {
  let pointer = 1;
  while (pointer < s.length) {
    if (s[pointer - 1] === s[pointer]) {
      s = s.replace(s[pointer - 1].repeat(2), '');
      pointer = Math.max(1, --pointer);
      if (s.length === 0) {
        break;
      }
    } else {
      ++pointer;
    }
  }

  return s.length === 0 ? 1 : 0;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution('baabaa'));

console.log(solution('cdcd'));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
