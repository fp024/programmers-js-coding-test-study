import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 폰켓몬
 *   https://school.programmers.co.kr/learn/courses/30/lessons/1845
 */
function solution(nums: number[]) {
  const halfN = Math.trunc(nums.length / 2);
  const monsterSet = new Set(nums);
  return monsterSet.size > halfN ? halfN : monsterSet.size;
}
// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution([3, 1, 2, 3]));
  console.log(solution([3, 3, 3, 2, 2, 4]));
  console.log(solution([3, 3, 3, 2, 2, 2]));
}
// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
// 뭔가 이런 문제에 내가 약하긴 함. 😅
// 처음에 반복을 해서 경우수를 다 구할려다가 실패해서.. 힌트를 보고 풀긴했는데, 아리까리하다. 😅
//
// 다양하게 N/2의 유일한 몬스터를 선택하는 방법인데..
// 유일한 몬스터 집합크기보다 골라야할 수가 작으면 골라야할 수로 반환하고,
// 골라야할 수가 크면 유일한 몬스터 크기 집합 크기로 반환했다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// 다른 사람들도 거의 Set을 활용했다.
//
export default solution;
