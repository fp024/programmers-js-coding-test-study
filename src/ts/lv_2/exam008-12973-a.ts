/**
 * 짝지어 제거하기 - 힌트 제목에 스택이란 말이 나와서 스택을 활용해보자!
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */
function solution(s: string) {
  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution('baabaa'));

console.log(solution('cdcd'));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   역시 스텍을 쓰니 간편하구만 👍
//   +1점 통과
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
