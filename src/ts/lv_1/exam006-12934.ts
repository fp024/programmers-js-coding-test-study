/*
 * 정수 제곱근 판별
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12934
 */
function solution(n: number) {
  let answer = 0;

  const sqrtValue = Math.sqrt(n);
  answer = Math.floor(sqrtValue) === sqrtValue ? Math.pow(sqrtValue + 1, 2) : -1;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(121));
  console.log(solution(3));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   정수 여부 확인에 Number.isInteger(n)을 활용해도 된다.
//
export default solution;
