import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 예상 대진표
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12985
 */

/*
   문제 풀이 전략
    대진표가 일종의 완전 이진 트리 모양이 되긴한데...
    어떻게 바로 연관지어야할지 생각은 잘 안난다. 😅
*/

function solution(n: number, a: number, b: number) {
  let answer = 0;

  for (let i = n; i > 1; i = Math.trunc(i / 2)) {
    console.log(`slotCount: ${i}`);

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    console.log(`nextA: ${a}, nextB: ${b}`);
    if (a !== b) {
      answer++;
    } else {
      // 만나는 상태
      answer += 1;
      break;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution(8, 4, 7));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   일단은 줄어드는 층을 만드는 반복을 만든다음에, 다음 슬롯 인덱스를 계산해서 처리를 하긴 했는대,
//   +1점으로 통과했다..😅
//   뭔가 어거지로 풀은 것 같긴함.. 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
