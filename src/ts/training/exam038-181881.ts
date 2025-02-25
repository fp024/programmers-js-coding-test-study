/*
 * 조건에 맞게 수열 변환하기 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181881
 */
function solution(arr: number[]) {
  let answer = 0;

  let changed: boolean = true;
  let count = 0;
  while (changed) {
    changed = false;
    for (let [i, v] of arr.entries()) {
      if (v >= 50 && v % 2 == 0) {
        const newVal = v / 2;
        if (newVal !== arr[i]) {
          changed = true;
        }
        arr[i] = newVal;
      } else if (v < 50 && v % 2 == 1) {
        const newVal = v * 2 + 1;
        if (newVal !== arr[i]) {
          changed = true;
        }
        arr[i] = newVal;
      }
    }
    count++;
  }

  answer = count - 1;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 3, 100, 99, 98]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
