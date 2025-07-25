/**
 * 피보나치 수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */
function solution(n: number) {
  return fibonacci(n) % 1234567;
}

function fibonacci(n: number): number {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(3));

  console.log(solution(5));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   아주 옛날에 재귀로는 잘 풀었던 것 같은데... 지금 돌대가리 된듯..😅
//   그런데 또 하다보니 된 것 같음..
//   이 코드로 제출하면 아마도 n이 클때는 스택 꽉차서 call stack 오류 발생할 것 같다.
//
//   실제로 수행을 시켜보니...
//   테스트 7~12는 시간초과이고, 13~14는 런타임 에러다. 😅
//   다음 단계로 재귀를 반복으로 바꿔야할 것 같다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
