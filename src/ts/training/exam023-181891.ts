/*
 * 순서 바꾸기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181891
 */
function solution(num_list: number[], n: number) {
  let answer: number[] = [];

  answer = [...num_list.slice(n), ...num_list.slice(0, n)];

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
