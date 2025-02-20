/*
 * 9로 나눈 나머지
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181914
 */
function solution(number) {
  let answer = 0;
  answer = [...number].reduce((a, n) => a + Number(n), 0) % 9;
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('123'));
console.log(solution('78720646226947352489'));

export default solution;
// === 문제 읽고 첫 느낌 ===
// 처음에 BigInt 쓰려고 했는데, 문제에 각자리수의 합을 더해서 나누면 결과가 나온다고 해서 그대로 했다. 😅
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
