/**
 * 숫자의 표현
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n: number) {
  let answer = 0;
  let halfNPlus2 = Math.trunc(n / 2) + 2;
  let lastJ = 0;

  if (n == 1 || n == 2) {
    return 1;
  }

  for (let i = 1; i <= halfNPlus2; i++) {
    let total = 0;
    let debug: number[] = [];
    for (let j = i; j <= halfNPlus2; j++) {
      debug.push(j);
      total += j;

      if (total === n) {
        console.log(debug);
        answer++;
        lastJ = j;
        i = lastJ - 2;
        break;
      } else if (total > n) {
        break;
      }
    }
    if (lastJ == halfNPlus2 - 1) {
      break;
    }
  }

  return answer + 1;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(15));

console.log(solution(2));
console.log(solution(1));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   뭔가 바로 떠오르는 문제는 아님?
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
