/*
 * 접두사인지 확인하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181906
 */
function solution(my_string: string, is_prefix: string) {
  let answer = 0;

  answer = my_string.startsWith(is_prefix) ? 1 : 0;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('banana', 'ban'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'abcd'));
console.log(solution('banana', 'bananan'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// boolean 앞에 + 해주면 true는 1, false는 0으로 변환해준다고 함.
//
export default solution;
