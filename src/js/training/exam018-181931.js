/*
 * 등차수열의 특정한 항만 더하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181931
 */
function solution(a, d, included) {
  let answer = 0;
  included.forEach((v, i) => {
    if (v) {
      answer += a + i * d;
    }
  });
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// reduce가 익숙해지면 바꿔봐야겠다.
