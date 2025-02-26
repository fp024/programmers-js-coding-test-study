/*
 * 빈 배열에 추가, 삭제하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181860
 */
function solution(arr: number[], flag: boolean[]) {
  let X: number[] = [];

  for (const [i, f] of flag.entries()) {
    if (f) {
      X.push(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      X.splice(X.length - arr[i]);
    }
  }

  return X;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
