/*
 * 간단한 식 계산하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181865
 */
function solution(binomial: string) {
  const [a, op, b] = binomial.split(' ');

  const operation: { [key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operation[op](Number(a), Number(b));
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('43 + 12'));

console.log(solution('0 - 7777'));

console.log(solution('40000 * 40000'));

// === 문제 읽고 첫 느낌 ===
//   eval()쓰란 말은 아닐 것 같은데.. 그냥 써봤다. 😂 - 다시 풀었다.
//   💡 TS라서 key에 대해서도 타입 정확하게 명시를 해야했다.
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
