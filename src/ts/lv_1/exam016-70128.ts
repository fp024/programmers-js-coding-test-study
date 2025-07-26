import { isStandalone } from '../../utils/testHelper.js';
/*
 * 내적
 *   https://school.programmers.co.kr/learn/courses/30/lessons/70128
 *   스칼라곱
 *     https://ko.wikipedia.org/wiki/%EC%8A%A4%EC%B9%BC%EB%9D%BC%EA%B3%B1
 */
function solution(a: number[], b: number[]) {
  return a
    .map((v1, idx) => v1 * b[idx]) //
    .reduce((acc, sum) => acc + sum, 0);
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
  console.log(solution([-1, 0, 1], [1, 0, -1]));
}

// === 문제 읽고 첫 느낌 ===
//    내적이 뭔지는 잘 모르겠지만, 예제에 계산 예제가 있어서 그거 그대로 코드에 대입하면 풀 수 있긴하겠다. 😅
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
