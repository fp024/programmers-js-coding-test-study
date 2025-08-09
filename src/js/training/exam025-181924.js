/*
 * 수열과 구간 쿼리 3
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181924
 */
function solution(arr, queries) {
  queries.forEach((query) => {
    const firstIndex = query[0];
    const secondIndex = query[1];

    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  });

  return arr;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
//   가장 위에 풀이가 단순하고 좋았다. 👍
//   [a, b] = [b, a] 이런식으로 구조분해 할당해서 즉시 교환할 수 있는 것을 잊고 있었다.
