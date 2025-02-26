/*
 * 날짜 비교하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181838
 */
function solution(date1: number[], date2: number[]) {
  let answer = 0;

  for (const [i, d1] of date1.entries()) {
    if (d1 < date2[i]) {
      answer = 1;
      break;
    } else if (d1 > date2[i]) {
      break;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([2021, 12, 28], [2021, 12, 29]));

console.log(solution([1024, 10, 24], [1024, 10, 24]));

console.log(solution([2022, 1, 1], [2021, 12, 31]));

// === 문제 읽고 첫 느낌 ===
//   이상하게 어렵게 느껴진다.. 😂, 그런데 이거 +5점 받았다.. 이유는 모르겠지만..😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
