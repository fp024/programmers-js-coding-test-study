/**
 * 올바른 괄호 - AI 가이드
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */
function solution(s: string) {
  const stack: string[] = [];

  for (let char of s) {
    if (char === '(') {
      stack.push('(');
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('()()'));

  console.log(solution('(())()'));

  console.log(solution(')()('));

  console.log(solution('(()('));

  console.log(solution('))))'));

  console.log(solution('(((('));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//  먼저 내가 먼저 풀은게 +1점으로 통과는 했지만 엉퉁하게 풀은 것 같아서, AI에게 가이드 받으니..
//  짝이 없을 때.. 바로 실패로 간주하면 되는데... 괜히 닫는 괄호를 넣는 이상한 동작을 했었다. 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
