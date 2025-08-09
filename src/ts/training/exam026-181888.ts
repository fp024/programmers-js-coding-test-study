/*
 * n개 간격의 원소들
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181888
 */
function solution(num_list: number[], n: number) {
  const answer: number[] = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([4, 2, 6, 1, 7, 6], 2));
console.log(solution([4, 2, 6, 1, 7, 6], 4));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
