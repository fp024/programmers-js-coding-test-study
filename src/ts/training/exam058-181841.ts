/*
 * 꼬리 문자열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181841
 */
function solution(str_list: string[], ex: string) {
  let answer = '';

  answer = str_list.filter((s) => !s.includes(ex)).join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['abc', 'def', 'ghi'], 'ef'));

console.log(solution(['abc', 'bbc', 'cbc'], 'c'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
