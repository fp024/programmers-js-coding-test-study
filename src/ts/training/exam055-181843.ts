/*
 * 부분 문자열인지 확인하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181843
 */
function solution(my_string: string, target: string) {
  let answer = 0;

  answer = +my_string.includes(target);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('banana', 'ana'));

console.log(solution('banana', 'wxyz'));

// === 문제 읽고 첫 느낌 ===
// 나도 boolean결과에 +붙여서 결과를 바꿔봤다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
