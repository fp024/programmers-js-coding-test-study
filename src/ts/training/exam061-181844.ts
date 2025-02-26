/*
 * 배열의 원소 삭제하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181844
 */
function solution(arr: number[], delete_list: number[]) {
  return arr.filter((a) => !delete_list.includes(a));
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));

console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
