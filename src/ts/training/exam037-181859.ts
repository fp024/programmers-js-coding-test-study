/*
 * 배열 만들기 6
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181859
 */
function solution(arr: number[]) {
  const stk: number[] = [];

  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0 || stk[stk.length - 1] !== arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.splice(stk.length - 1);
      i++;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([0, 1, 1, 1, 0]));

console.log(solution([0, 1, 0, 1, 0]));

console.log(solution([0, 1, 1, 0]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
