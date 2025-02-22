/*
 * 세로 읽기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181904
 */
function solution(my_string: string, m: number, c: number) {
  let answer = '';

  for (let i = c - 1; i < my_string.length; i += m) {
    answer += my_string[i];
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
console.log(solution('programmers', 1, 1));

// === 문제 읽고 첫 느낌 ===
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
