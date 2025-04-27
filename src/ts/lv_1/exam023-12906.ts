/*
 * 같은 숫자는 싫어
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */
function solution(arr: number[]) {
  let answer: number[] = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 1, 3, 3, 0, 1, 1]));

console.log(solution([4, 4, 4, 3, 3]));

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
