/*
 * 두 정수 사이의 합
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12912
 */
function solution(a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  const answer = sum;
  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(3, 5));
  console.log(solution(3, 3));
  console.log(solution(5, 3));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 푼 사람이 가우스 수열의 합으로 풀었다는데, 뭔말인지 모르겠다. 😅
//
export default solution;
