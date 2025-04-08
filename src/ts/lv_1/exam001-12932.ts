/*
 * 자연수 뒤집어 배열로 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12932
 */
function solution(n: number) {
  return n
    .toString()
    .split('')
    .map((s) => Number(s))
    .reverse();
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(12345));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
