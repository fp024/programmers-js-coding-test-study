import { isStandalone } from '../../utils/testHelper.js';
/*
 * 콜라 문제
 *   https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */
function solution(a: number, b: number, n: number) {
  let answer = 0;

  let currentBottles = n;

  while (currentBottles >= a) {
    const remainder = currentBottles % a;
    const exchangedBottles = Math.trunc((currentBottles - remainder) / a) * b;
    currentBottles = currentBottles - (currentBottles - remainder) + exchangedBottles;
    answer += exchangedBottles;
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution(2, 1, 20));
  console.log(solution(3, 1, 20));
}

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
