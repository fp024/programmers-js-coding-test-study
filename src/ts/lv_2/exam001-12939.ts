import { isStandalone } from '../../utils/testHelper.js';
/**
 * 최댓값과 최솟값
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12939
 */
function solution(s: string) {
  const [min, max]: number[] = s
    .split(' ')
    .map((s) => Number(s))
    .reduce(
      (minMaxPair, s) => [Math.min(s, minMaxPair[0]), Math.max(s, minMaxPair[1])],
      [Infinity, -Infinity]
    );

  return min + ' ' + max;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(solution('1 2 3 4'));

  console.log(solution('-1 -2 -3 -4'));

  console.log(solution('-1 -1'));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   lv2의 첫문제이긴 한데.. 비교적 쉽게 풀렸다. 😅

// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
