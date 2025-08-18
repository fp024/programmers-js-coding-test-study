import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * flag에 따라 다른 값 반환하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181933
 */
function solution(a, b, flag) {
  const answer = flag ? a + b : a - b;
  return answer;
}

// === 단순 실행 테스트 ===
if (isDirectRun(import.meta.url)) {
  if (solution(-4, 7, true) !== 3) {
    throw Error('Test Case 01 Failed.');
  }

  if (solution(-4, 7, false) !== -11) {
    throw Error('Test Case 02 Failed.');
  }
}

// === 다른 사람 풀이 확인 이후 의견 ===
// ...
