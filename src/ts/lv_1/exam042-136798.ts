import { isStandalone } from '../../utils/testHelper.js';
/*
 * 기사단원의 무기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */
function solution(number: number, limit: number, power: number) {
  const divisorCountArray: number[] = [];

  for (let i = 1; i <= number; i++) {
    divisorCountArray.push(divisorCount(i));
  }
  console.log(divisorCountArray); // 약수 개수 배열
  return divisorCountArray.reduce((acc, c) => acc + (c > limit ? power : c), 0);
}

// 어떤수의 약수 카운트
function divisorCount(n: number) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) {
        count++;
      }
    }
  }
  return count;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(solution(5, 3, 2));
  console.log(solution(10, 3, 2));
}
// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
// 약수의 개수.. 예시로 나온 배열이 뭔말인가 했는데...
// 1, 2, 3, 4, 5의 각 약수의 개수가 [1, 2, 2, 3, 2] 이말이였구나..😅
// 약수 배열까지 구하게 되면, 이후부터는 쉬워서.. 제출을 해봤는데..
// +4점 받았다. 👍
//
// === 다른 사람 풀이 확인 이후 의견 ===
// 그런데.. 요즘은 내가 JS의 고차함수를 안쓴 코드들을 잘 이해를 못함..😂
//
export default solution;
