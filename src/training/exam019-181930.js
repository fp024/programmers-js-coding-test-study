/*
 * 주사위 게임 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181930
 */
function solution(a, b, c) {
  let answer = 0;

  const uniqueArray = [...new Set([a, b, c])];

  answer = a + b + c;

  if (uniqueArray.length < 3) {
    answer *= a ** 2 + b ** 2 + c ** 2;
  }

  if (uniqueArray.length < 2) {
    answer *= a ** 3 + b ** 3 + c ** 3;
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// Math.pow()같은 ** 연산자가 있는 것은 처음 알았다., ES2016부터 지원한다.
