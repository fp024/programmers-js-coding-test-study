/*
 * 두 수의 합
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181846
 */
function solution(a: string, b: string) {
  let answer = '';

  let revLong;
  let revShort;

  if (a.length > b.length) {
    revLong = [...a].reverse();
    revShort = [...b].reverse();
  } else {
    revLong = [...b].reverse();
    revShort = [...a].reverse();
  }

  let ceiling = 0; // 올림 수
  for (const [idx, s] of revLong.entries()) {
    let partSum = ceiling + Number(s) + (idx < revShort.length ? Number(revShort[idx]) : 0);

    if (partSum >= 10) {
      ceiling = 1;
      answer = '' + (partSum - 10) + answer;
    } else {
      ceiling = 0;
      answer = '' + partSum + answer;
    }
  }

  if (ceiling > 0) {
    answer = '' + ceiling + answer;
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('582', '734'));

console.log(solution('18446744073709551615', '287346502836570928366'));

console.log(solution('0', '0'));

// === 문제 읽고 첫 느낌 ===
// 일만 자리수? 더하기? BigInt로 되는건가?
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   나는 역순으로 뒤집어서 한자리씩 계산하면서 풀긴 했는데.. BigInt로도 되긴하나보다. 😅
export default solution;
