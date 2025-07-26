import { isStandalone } from '../../utils/testHelper.js';
/*
 * 가운데 글자 가져오기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12903
 */
function solution(s: string) {
  let answer;

  if (s.length === 1) {
    answer = s;
  } else if (s.length % 2 === 0) {
    answer = s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
  } else {
    answer = s.charAt(s.length / 2);
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution('abcde'));
  console.log(solution('qwer'));
  console.log(solution('1'));
  console.log(solution('12'));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
