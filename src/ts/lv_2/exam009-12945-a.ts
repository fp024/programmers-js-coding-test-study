/**
 * 피보나치 수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */
function solution(n: number) {
  let prev = 0;
  let next = 1;

  const div = 1_234_567;
  for (let i = 3; i <= n; i++) {
    let temp = prev;
    prev = next % div;
    next = (next + temp) % div;
  }
  return (prev + next) % div;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(3));

console.log(solution(5));

console.log(solution(100_000));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   반복으로 바꾼다음에, prev, next를 구할 때...
//   나머지 연산을 동적으로 하게 했음.
//   +2점 통과 👍👍
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
