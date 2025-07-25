/**
 * 숫자의 표현 - AI 가이드 - 투포인터
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n: number) {
  let answer = 1; // 자기 자신(n) 포함

  let sum = 1;
  let start = 1; // 시작 포인터
  let end = 1; // 끝 포인터

  while (start <= Math.trunc(n / 2)) {
    if (sum < n) {
      // 범위 확장 (합을 늘림)
      end++;
      sum += end;
    } else if (sum > n) {
      // 범위 축소 (합을 줄임)
      sum -= start;
      start++;
    } else {
      // sum === n
      answer++;
      sum -= start;
      start++;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(15));

  console.log(solution(2));

  console.log(solution(1));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   AI의 투포인터 가이드를 받아 다시 풀었다.
//   잘되는데... 안 보고 잘 풀수 있을까? 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
