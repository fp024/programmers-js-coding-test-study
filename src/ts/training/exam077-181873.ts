/*
 * 특정한 문자를 대문자로 바꾸기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181873
 */
function solution(my_string: string, alp: string) {
  let answer = [...my_string]
    .map((c) => {
      if (c === alp) {
        return c.toUpperCase();
      } else {
        return c;
      }
    })
    .join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('programmers', 'p'));

console.log(solution('lowercase', 'x'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
