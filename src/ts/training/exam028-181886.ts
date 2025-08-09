/*
 * 5명씩
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181886
 */
function solution(names: string[]) {
  const answer: string[] = [];

  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx']));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   filter 써도 되긴 되겠구나...
export default solution;
