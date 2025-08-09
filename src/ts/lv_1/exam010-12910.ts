import { isStandalone } from '../../utils/testHelper.js';
/*
 * 나누어 떨어지는 숫자 배열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12910
 */
function solution(arr: number[], divisor: number) {
  const answer: number[] = arr
    .filter((n) => n % divisor === 0) //
    .sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([5, 9, 7, 10], 5));
  console.log(solution([2, 36, 1, 3], 1));
  console.log(solution([3, 2, 6], 10));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
