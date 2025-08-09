/*
 * 무작위로 K개의 수 뽑기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181858
 */
function solution(arr: number[], k: number) {
  const answer = [...new Set([...arr])].slice(0, k);

  for (let i = answer.length; i < k; i++) {
    answer.push(-1);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([0, 1, 1, 2, 2, 3], 3));

console.log(solution([0, 1, 1, 1, 1], 4));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
