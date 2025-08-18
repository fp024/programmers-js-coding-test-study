import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 같은 숫자는 싫어
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */
function solution(arr: number[]) {
  // 마지막 요소를 따로 저장
  const lastElement = arr[arr.length - 1];

  // 마지막 요소 제외하고 filter
  const filtered = arr.slice(0, -1).filter((n, i) => n !== arr[i + 1]);

  // 마지막 요소 추가
  return [...filtered, lastElement];
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(solution([1, 1, 3, 3, 0, 1, 1]));

  console.log(solution([4, 4, 4, 3, 3]));
}

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
