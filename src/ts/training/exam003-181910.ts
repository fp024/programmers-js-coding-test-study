/*
 * 문자열 뒤의 n글자
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181910
 */
function solution(my_string: string, n: number) {
  let answer = '';

  answer = my_string.slice(my_string.length - n);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('ProgrammerS123', 11));
console.log(solution('He110W0r1d', 5));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
