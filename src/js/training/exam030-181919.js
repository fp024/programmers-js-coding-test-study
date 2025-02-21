/*
 * 콜라츠 수열 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181919
 */
function solution(n) {
  let answer = [];
  let x = n;
  while (x != 1) {
    answer.push(x);
    if (x % 2 == 0) {
      x = x / 2;
    } else {
      x = 3 * x + 1;
    }
  }
  answer.push(x);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(10));

export default solution;
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
