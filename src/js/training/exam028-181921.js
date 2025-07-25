/*
 * 배열 만들기 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181921
 */
function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 == 0 && /^[05]+$/.test('' + i)) {
      answer.push(i);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(10, 20));
  console.log(solution(10, 555));
}

export default solution;
// === 문제 읽고 첫 느낌 ===
// 뭔가 바로 생각이 안나는데... 😂
// 이후에 그냥 정규식을 써봤는데... 코드 자체는 아주 간단하게 끝났다.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
