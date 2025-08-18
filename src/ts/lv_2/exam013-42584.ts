import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 주식가격
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42584
 */

/*
   문제 풀이 전략
    0. 이번에는 단순하게 정확도만 따져보자!
      - 효율성은 이후 생각해보자!
    1. 문제 사양
      - 인덱스가 초(sec)
      - 값이 주식 시세(원)
    2. 현재 가격 보다 더 낮은 가격이 되기 바로 직전의 시간(초)
    3. 가격이 떨어지는 순간에도 그 "1초"는 버틴 것으로 간주
*/

function solution(prices: number[]) {
  const answer: number[] = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answer[i]++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
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
//   일단은 O(n^2)으로 정확도는 맞는지만 프로그래머스에서 확인했는데,
//   정확성과 효율성이 통과가 되었음. 😅
//     테스트 1 〉	통과 (5.16ms, 43.6MB)
//     테스트 2 〉	통과 (4.63ms, 42MB)
//     테스트 3 〉	통과 (9.24ms, 43.9MB)
//     테스트 4 〉	통과 (5.32ms, 42.3MB)
//     테스트 5 〉	통과 (5.03ms, 42.2MB)
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
