/*
 * 정수 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181840
 */
function solution(num_list: number[], n: number) {
  let answer = 0;

  answer = num_list.indexOf(n) >= 0 ? 1 : 0;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 3, 4, 5], 3));

console.log(solution([15, 98, 23, 2, 15], 20));

// === 문제 읽고 첫 느낌 ===
//   뒤에서 부터 앞으로 풀고 있어서... 문제가 점점 쉬워지고 있다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
