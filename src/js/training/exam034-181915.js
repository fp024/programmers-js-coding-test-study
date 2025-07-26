import { isStandalone } from '../../utils/testHelper.js';
/*
 * 글자 이어 붙여 문자열 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181915
 */
function solution(my_string, index_list) {
  let answer = index_list.map((i) => my_string.charAt(i)).join('');
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
  console.log(solution('zpiaz', [1, 2, 0, 0, 3]));
}

export default solution;
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
