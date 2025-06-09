/**
 * 숫자의 표현
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n: number) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; sum <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(15));

console.log(solution(2));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   뭔가 바로 떠오르는 문제는 아님?
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
