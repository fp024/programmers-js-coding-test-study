/*
 * 명예의 전당 (1) - splice()를 사용해보자!
 *   https://school.programmers.co.kr/learn/courses/30/lessons/138477
 */
function solution(k: number, score: number[]) {
  const answer: number[] = [];
  const honerScore: number[] = [];

  for (let i = 0; i < score.length; i++) {
    honerScore.push(score[i]);
    honerScore.sort((a, b) => b - a).splice(k);
    answer.push(honerScore[honerScore.length - 1]);
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
  console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
  // 추가 테스트
  console.log(solution(3, [100, 30, 40, 150, 300, 200, 200]));
}

// === 문제 읽고 첫 느낌 ===
//    splice(k)를 활용
//    k가 배열의 범위를 벗어날 경우, 배열을 수정하지 않음.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
