/*
 * 수열과 구간 쿼리 4
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181922
 */
function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k == 0) {
        arr[i]++;
      }
    }
  });

  return arr;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
