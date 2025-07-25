/*
 * 더 크게 합치기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181939
 */
function solution(a, b) {
  let answer = 0;

  let aPlusB = Number(a + '' + b);
  let bPlusA = Number(b + '' + a);

  answer = aPlusB > bPlusA ? aPlusB : bPlusA;

  return answer;
}

// === 단순 실행 테스트 ===
if (process.env.VITEST_WORKER_ID === undefined) {
  if (solution(9, 91) !== 991) {
    throw Error('Test Case 01 Failed.');
  }

  if (solution(89, 8) !== 898) {
    throw Error('Test Case 02 Failed.');
  }
}

// === 다른 사람 풀이 확인 이후 의견 ===
// 백틱(`)써서 숫자를 이어도 되겠다, Math.max()를 쓰면 더 단순했을 것 같다.
