/*
 * 뒤에서 5등까지
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181853
 */
function solution(num_list: number[]) {
  let answer: number[] = [];

  num_list.sort((a, b) => a - b);
  answer = num_list.slice(0, 5);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([12, 4, 15, 46, 38, 1, 14]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
