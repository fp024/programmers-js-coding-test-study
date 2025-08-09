import { isStandalone } from '../../utils/testHelper.js';
/*
 * 삼총사 - AI 제안
 *   https://school.programmers.co.kr/learn/courses/30/lessons/131705
 */
function solution(number: number[]) {
  let answer = 0;
  const n = number.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([-2, 3, 0, 2, -5]));
  console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
  console.log(solution([-1, 1, -1, 1]));
}

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   내가 생각대로 먼저 작성해본 것이 답은 나왔지만 산으로 가버린 엉터리 내용이라서, AI에게 질문을 해보았다.
//   AI가 추천해준 방법이 다른사람 풀이의 두번째와 비슷했다.
//   사이트에 있는 첫번째 답안은 꽤나 기술적으로 한것 같기도 하고... 지금 몰라도 될 것 같다. 😅
//
export default solution;
