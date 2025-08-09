/*
 * 첫 번째로 나오는 음수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181896
 */
function solution(num_list: number[]) {
  let answer = -1;

  for (const [idx, n] of num_list.entries()) {
    if (n < 0) {
      answer = idx;
      break;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([12, 4, 15, 46, 38, -2, 15]));
console.log(solution([13, 22, 53, 24, 15, 6]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
