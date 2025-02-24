/*
 * 할 일 목록
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181885
 */
function solution(todo_list: string[], finished: boolean[]) {
  let answer: string[] = [];

  answer = todo_list.filter((_, i) => !finished[i]);

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(['problemsolving', 'practiceguitar', 'swim', 'studygraph'], [true, false, true, false])
);

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
