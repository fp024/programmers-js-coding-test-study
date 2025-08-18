import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 주식가격
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42584
 */

/*
   문제 풀이 전략
    0. 다른 사람들 스택을 활용했다고 하는데... 나도 적용해보자!
    1. 스택에는 "아직 가격이 안 떨어진 시점들"을 저장
    2. 현재 가격이 낮으면 → 스택에서 높은 가격들을 모두 꺼내며 정답 계산
    3. 현재 인덱스를 스택에 추가
    4. 마지막에 스택에 남은 애들 = 끝까지 안 떨어진 애들
*/

function solution(prices: number[]) {
  const answer: number[] = new Array(prices.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const index = stack.pop() as number;
      answer[index] = i - index;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const index = stack.pop() as number;
    answer[index] = prices.length - index - 1;
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution([1, 2, 3, 2, 3]));
  console.log(solution([5, 4, 3, 2, 1]));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// 뭔가 더 나아진 것 같은데, 효율성 태스트 시간은 1, 2, 3번 케이스에 대해 더 걸린 것 같음.
// 효율성 테스트에서 실제 10만개 테스트를 직
//   테스트 1 〉	통과 (28.17ms, 43.3MB)
//   테스트 2 〉	통과 (28.36ms, 41.6MB)
//   테스트 3 〉	통과 (28.98ms, 43.9MB)
//   테스트 4 〉	통과 (4.33ms, 41.9MB)
//   테스트 5 〉	통과 (3.70ms, 42.1MB)
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
