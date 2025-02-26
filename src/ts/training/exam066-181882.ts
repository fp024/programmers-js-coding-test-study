/*
 * 조건에 맞게 수열 변환하기 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181882
 */
function solution(arr: number[]) {
  let answer: number[] = [];

  answer = arr.map((a) => {
    if (a >= 50 && a % 2 === 0) {
      return a / 2;
    } else if (a < 50 && a % 2 === 1) {
      return a * 2;
    } else {
      return a;
    }
  });

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 3, 100, 99, 98]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
