/*
 * 카운트 다운
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181899
 */
function solution(start_num: number, end_num: number) {
  let answer: number[] = Array(start_num - end_num);

  for (let i = start_num, j = 0; i >= end_num; i--, j++) {
    answer[j] = i;
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(10, 3));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
