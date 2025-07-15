/*
 * n의 배수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181937
 */
function solution(num, n) {
  let answer = 0;

  answer = num % n === 0 ? 1 : 0;

  return answer;
}

// === 단순 실행 테스트 ===
if (process.env.JEST_WORKER_ID === undefined) {
  if (solution(98, 2) !== 1) {
    throw Error('Test Case 01 Failed.');
  }

  if (solution(34, 3) !== 0) {
    throw Error('Test Case 02 Failed.');
  }
}

// === 다른 사람 풀이 확인 이후 의견 ===
// ...
