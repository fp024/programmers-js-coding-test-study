/*
 * 주사위 게임 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181835
 */
function solution(a: number, b: number) {
  let answer = 0;

  if (isOdd(a) && isOdd(b)) {
    answer = a ** 2 + b ** 2;
  } else if (isOdd(a) || isOdd(b)) {
    answer = 2 * (a + b);
  } else if (!isOdd(a) && !isOdd(b)) {
    answer = Math.abs(a - b);
  }

  return answer;
}

function isOdd(a: number) {
  return a % 2 === 1;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3, 5));

console.log(solution(6, 1));

console.log(solution(2, 4));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
