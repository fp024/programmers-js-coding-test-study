/*
 * 시저 암호
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12926
 */
function solution(s: string, n: number) {
  let answer = '';

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);

    const idx = ALPHABET.indexOf(c.toLowerCase());

    if (idx < 0) {
      answer += c;
      continue;
    }

    const isLowercase = c.toLowerCase() === c;
    const shiftString = ALPHABET.charAt((idx + n) % ALPHABET.length);

    answer += isLowercase ? shiftString.toLowerCase() : shiftString.toUpperCase();
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));

// === 문제 읽고 첫 느낌 ===
//   일단 생각 나는대로 풀었다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 사람들도 비슷비슷하게 풀은 것 같다.
//
export default solution;
