/**
 * 올바른 괄호
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */
function solution(s: string) {
  const strArr: string[] = [...s];

  const stack: string[] = [];

  for (let s of [...strArr]) {
    if (s === '(') {
      stack.push('(');
    } else if (s === ')') {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(')');
      }
    }
  }

  console.log(stack);

  return stack.length === 0;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution('()()'));

console.log(solution('(())()'));

console.log(solution(')()('));

console.log(solution('(()('));

console.log(solution('))))'));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//  주제가 스택/큐인데... 어떻게 풀어야하나.

// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
