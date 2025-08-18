import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 두 수의 연산값 비교하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181938
 */
function solution(a, b) {
  let answer = 0;

  const first = Number(`${a}${b}`);
  const second = 2 * a * b;

  answer = first >= second ? first : second;

  return answer;
}

// === 단순 실행 테스트 ===
if (isDirectRun(import.meta.url)) {
  if (solution(2, 91) !== 364) {
    throw Error('Test Case 01 Failed.');
  }

  if (solution(91, 2) !== 912) {
    throw Error('Test Case 02 Failed.');
  }
}

// === 다른 사람 풀이 확인 이후 의견 ===
// 별로 특별한 점은 없었다. 😅
