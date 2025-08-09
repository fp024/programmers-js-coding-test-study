import { isStandalone } from '../../utils/testHelper.js';
/**
 * 괄호 회전하기 - 코드리뷰 제안 사항 수정
 *   https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */
const bracketPair: Record<string, string> = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const openBracketSet = new Set(Object.keys(bracketPair));

function isValidBracketString(brackets: string) {
  const stack: string[] = [];

  for (const b of brackets) {
    if (openBracketSet.has(b)) {
      stack.push(b);
    } else if (stack.length === 0) {
      return false;
    } else {
      const openBracket = stack.pop() as string;
      // 바로 pop()을 해서 비교해도 된다.
      if (bracketPair[openBracket] !== b) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/** 문제 해결 함수 */
function solution(s: string) {
  let answer = 0;

  // 길이가 홀수면 불가능
  if (s.length % 2 === 1) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValidBracketString(rotated)) {
      answer++;
    }
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
// === 코드 리뷰 제안 사항 ===
//  [shift() 대신 slice 사용 제안]
//   `Array.shift()` 는 O(n) 이라 길이가 길어질수록 비용이 커집니다.
//   `slice` 를 이용해 문자열을 바로 잘라 쓰면 매 회전마다 새 문자열을 만들기는 하지만,
//    문자열 길이가 1 000 이하(해당 문제 제약)라면 구현이 더 간단하고 비용 차이도 크지 않습니다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
