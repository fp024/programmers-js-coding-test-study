/*
 * 길이에 따른 연산
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181879
 */
function solution(num_list: number[]) {
  let answer =
    num_list.length > 10
      ? num_list.reduce((acc, n) => acc + n, 0)
      : num_list.reduce((acc, n) => acc * n, 1);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));

console.log(solution([2, 3, 4, 5]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
