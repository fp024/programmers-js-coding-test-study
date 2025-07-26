import { isStandalone } from '../../utils/testHelper.js';
/*
 * 문자 리스트를 문자열로 변환하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181941
 */
function solution(arr) {
  let answer = '';

  answer = arr.join('');

  return answer;
}
// 단순 실행 테스트
if (isStandalone()) {
  console.log(solution(['a', 'b', 'c']) == 'abc');
}
