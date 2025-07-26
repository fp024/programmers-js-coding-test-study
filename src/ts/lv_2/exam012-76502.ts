import { isStandalone } from '../../utils/testHelper.js';
/**
 * 괄호 회전하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

/*
   문제 풀이 전략
    1. 일단 회전을 해보자!, 회전이 정상적으로 되는 코드를 일단 만들어서, 출력해서 확인해보자!
    2. ✨ 괄호 검사 코드를 만들자!
*/

const bracketPair: Record<string, string> = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const openBracketSet = new Set(Object.keys(bracketPair));

function isValidBrackets(brackets: string[]) {
  const stack = [];

  for (let b of brackets) {
    if (openBracketSet.has(b)) {
      // 괄호를 여는 것은 일단 스택에 넣는다.
      stack.push(b);
    } else if (stack.length === 0) {
      // 스택이 빈상태에서 괄호를 여는 문자가 아니면 올바른 괄호 문자가 아님
      return false;
    } else {
      // 스택이 비어있지 않은 상태에서 괄호를 여는 문자가 아니면 (닫는 괄호 문자)
      // 괄호쌍이 일치하면 스택에서 여는 괄호를 제거하고
      // 일치하지 않으면 올바른 괄호 문자가 아닌 것으로 간주한다.
      const openBracket = stack[stack.length - 1] as string; // stack peek 같은 코드를 사용해야한다.
      if (bracketPair[openBracket] === b) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/** 문제 해결 함수 */
function solution(s: string) {
  let answer = 0;
  const brackets = [...s];

  for (let i = 0; i < s.length; i++) {
    // 괄호 검사 영역...
    console.log(brackets);
    if (isValidBrackets(brackets)) {
      answer++;
    }
    // ...
    // 배열 회전

    const first = brackets.shift() as string;
    brackets.push(first);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(solution('[](){}'));
  console.log(solution('}]()[{'));
  console.log(solution('[)(]'));
  console.log(solution('}}}'));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
