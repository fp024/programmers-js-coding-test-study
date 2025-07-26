import { isStandalone } from '../../utils/testHelper.js';
/*
 * 없는 숫자 더하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/86051
 */
function solution(absolutes: number[]) {
  let answer;

  const numberSet = new Set([...absolutes]);
  let sum = 0;

  for (let i = 1; i <= 9; i++) {
    if (!numberSet.has(i)) {
      sum += i;
    }
  }

  answer = sum;
  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
  console.log(solution([5, 8, 4, 0, 6, 7, 9]));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 풀이 괜찮다..  1 ~ 9 총합 45에서 그냥 전달받은 배열 총합 수를 빼는 식으로 구현 👍
//
export default solution;
