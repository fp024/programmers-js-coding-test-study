/*
 * 약수의 개수와 덧셈
 *   https://school.programmers.co.kr/learn/courses/30/lessons/77884
 */
function solution(left: number, right: number) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    answer += isPerfectSquare(i) ? -i : i;
  }

  return answer;
}

function isPerfectSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(13, 17));
  console.log(solution(24, 27));
}

// === 문제 읽고 첫 느낌 ===
//   약수가 나오면... 그냥 N이라는 수를 1부터 ~ N까지 나눠서 0으로 나누어 떨어지는 수 들을 구해야겠다는 생각이 드는데...
//   JetBrains AI(Claude 3.5)에게 넌 어떻게 생각하니? 라고 물어봤다.
//   얘의 해법은,
//    검색을 위한 반복은 제곱근까지만 반복하면된다.
//    한번 반복할 때, 나눠서 0 떨어지는 약수들을 구하면서,
//    쌍이 되는 큰 약수를 구하면 모든 약수를 구할 수 있다.
//
//    그런데 문제가 요구한 내용은 그냥 어떤 수의 약수의 개수가 짝수인지 홀수인지 알아보는 것이여서,
//    약수가 홀수 개일 때는 그 수는 완전 제곱수(Perfect Square)이고, 아닐 경우 완전 제곱수가 아니란 것을 알면 된다.
//    결국은 제곱근을 구한 값이 정수인 것을 확인하면 완전 제곱수인지 알 수 있다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
