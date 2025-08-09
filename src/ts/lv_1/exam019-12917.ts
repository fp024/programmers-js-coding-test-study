import { isStandalone } from '../../utils/testHelper.js';
/*
 * 문자열 내림차순으로 배치하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12917
 */
function solution(s: string) {
  const answer =
    descSortThanJoin(s, (s) => s.toLowerCase() === s) +
    descSortThanJoin(s, (s) => s.toUpperCase() === s);

  return answer;
}

function descSortThanJoin(s: string, filterOp: (s: string) => boolean) {
  return s
    .split('')
    .filter(filterOp)
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .join('');
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution('Zbcdefg'));
}

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   1. ASCII 코드 상으로 대문자가 항상 소문자들보다 크므로 필터처리를 해서 반복을 두번 돌릴 필요는 없었다. 😂
//   2. 그냥 정렬 조건 함수를 정의할 필요없이 그냥 reverse()를 넣어주면 된다. 😅
//
export default solution;
