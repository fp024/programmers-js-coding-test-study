import { isStandalone } from '../../utils/testHelper.js';
/*
 * 삼총사
 *   https://school.programmers.co.kr/learn/courses/30/lessons/131705
 */
function solution(number: number[]) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    console.log('----------');
    let sum = number[i];
    console.log('i:', sum);
    for (let j = 0; j < number.length; j++) {
      if (j === i) {
        continue;
      }
      sum += number[j];
      console.log('  j:', sum);

      for (let k = 0; k < number.length; k++) {
        if (k === i || k === j) {
          continue;
        }
        sum += number[k];
        console.log('    k:', sum);
        if (sum === 0) {
          answer += 1;
        }
        sum -= number[k];
      }
      sum -= number[j];
    }
  }

  return Math.trunc(answer / 6);
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([-2, 3, 0, 2, -5]));
  console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
  console.log(solution([-1, 1, -1, 1]));
}

// === 문제 읽고 첫 느낌 ===
//   배열의 요소 3개를 더해서 0이 되는 경우를 찾는 것인데,
//   눈으로는 계산을 하겠는데, 코드로 어떻게 나타내지?
//   내가 이런 문제에 약함. 😂 좋은 방법이 빨리 생각이 안남.
//
//   모든 조합을 검사해서 중복 조합을 나눠주는 식으로 뭔가 엉터리로 답을 내어봤는데,
//   통과가 된다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
