/*
 * 접미사인지 확인하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181908
 */
function solution(my_string: string, is_suffix: string) {
  let answer = 0;

  const revMyStr = [...my_string].reverse().join('');
  const revSuffix = [...is_suffix].reverse().join('');
  answer = revMyStr.startsWith(revSuffix) ? 1 : 0;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('banana', 'ana'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'wxyz'));
console.log(solution('banana', 'abanana'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
