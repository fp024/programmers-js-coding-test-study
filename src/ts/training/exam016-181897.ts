/*
 * 리스트 자르기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181897
 */
function solution(n: number, slicer: number[], num_list: number[]) {
  let answer: number[] = [];

  const [a, b, c] = slicer;

  if (n === 1) {
    answer = num_list.filter((_, i) => i <= b);
  } else if (n === 2) {
    answer = num_list.filter((_, i) => i >= a);
  } else if (n === 3) {
    answer = num_list.filter((_, i) => i >= a && i <= b);
  } else if (n === 4) {
    for (let i = a; i <= b; i += c) {
      answer.push(num_list[i]);
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   slice로 자르면 되는 것을 생각 못했다. filter로도 4번째 커멘드에 대한 수식을 줄 수 있었다. i % c === 0
//
export default solution;
