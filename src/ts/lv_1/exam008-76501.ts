/*
 * 음양 더하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/76501
 */
function solution(absolutes: number[], signs: boolean[]) {
  let answer = absolutes
    .map((v, i) => (signs[i] ? v : -v)) //
    .reduce((acc, v) => acc + v, 0);

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
