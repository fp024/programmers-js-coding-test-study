/*
 * 2의 영역
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181894
 */
function solution(arr: number[]) {
  let answer: number[] = [];

  const first = arr.indexOf(2);

  if (first === -1) {
    answer.push(-1);
    return answer;
  }

  const last = arr.lastIndexOf(2);

  if (first === last) {
    answer.push(arr[first]);
    return answer;
  }

  answer = arr.slice(first, last + 1);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   처음과 마지막이 같은 경우도 slice로 동시 처리가 가능한 것 같다.
//
export default solution;
