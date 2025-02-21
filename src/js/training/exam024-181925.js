/*
 * 수 조작하기 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181925
 */
function solution(numLog) {
  let answer = '';
  const valueMap = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };
  for (let i = 1; i < numLog.length; i++) {
    answer += valueMap['' + (numLog[i] - numLog[i - 1])];
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
//   slice(1) 하면 1번 인덱스 부터 잘라낼 수 있다.
