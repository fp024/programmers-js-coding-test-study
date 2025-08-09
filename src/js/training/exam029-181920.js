/*
 * 카운트 업
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181920
 */
function solution(start_num, end_num) {
  const answer = [];

  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// Array와  map을 써서 한줄로 푸는 분들이 꽤 있다. 😅 그런데 난 아직 익숙하지가 않아서... 😂
