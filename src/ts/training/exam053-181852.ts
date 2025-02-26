/*
 * 뒤에서 5등 위로
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181852
 */
function solution(num_list: number[]) {
  let answer: number[] = [];

  num_list.sort((a, b) => b - a);
  answer = num_list.slice(0, num_list.length - 5).reverse();

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// 내가 뭔가 이상하게 생각한 것 같기도.. 그냥 오름자순 정렬하고 5번째 부터 나타내면 되긴 했는데...
export default solution;
