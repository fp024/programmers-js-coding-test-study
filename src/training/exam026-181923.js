/*
 * 수열과 구간 쿼리 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181923
 */
function solution(arr, queries) {
  let answer = [];

  queries.forEach((query) => {
    const s = query[0];
    const e = query[1];
    const k = query[2];

    const result = arr
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
      .slice(s, e + 1)
      .filter((el) => el > k)
      .sort((a, b) => a - b);
    if (result.length === 0) {
      answer.push(-1);
    } else {
      answer.push(result[0]);
    }
  });

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
