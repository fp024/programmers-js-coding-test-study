/*
 * 나머지가 1이 되는 수 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/87389
 */
function solution(n: number) {
  let i = 1;
  while (i < n) {
    if (n % i === 1) {
      break;
    }
    i++;
  }

  const answer = i;
  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(10));
  console.log(solution(12));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
