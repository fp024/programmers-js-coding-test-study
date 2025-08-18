import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 문자열 내 p와 y의 개수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12916
 */
function solution(s: string) {
  let pCount = 0;
  let yCount = 0;

  s.split('').forEach((c) => {
    if (c.toLowerCase() === 'p') {
      pCount++;
    } else if (c.toLowerCase() === 'y') {
      yCount++;
    }
  });

  const answer = pCount === yCount;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(solution('pPoooyY'));
  console.log(solution('Pyy'));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 풀이가 뭔가 새롭다.. 검사할 문자열로 split 해서 나뉜 요소 수를 비교한 것 같은데...
//
export default solution;
