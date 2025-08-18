import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 콜라츠 추측
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12943
 */
function solution(num: number) {
  let answer = 0;

  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    count++;

    if (count > 500) {
      count = -1;
      break;
    }
  }

  answer = count;
  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(solution(6));
  console.log(solution(16));
  console.log(solution(626331));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
