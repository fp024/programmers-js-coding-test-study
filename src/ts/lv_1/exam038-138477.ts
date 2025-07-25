/*
 * 명예의 전당 (1)
 *   https://school.programmers.co.kr/learn/courses/30/lessons/138477
 */
function solution(k: number, score: number[]) {
  const answer: number[] = [];
  const honerScore: number[] = [];

  // 1일차 점수 셋팅
  honerScore.push(score[0]); // 명예의 전당
  answer.push(score[0]); // 발표 점수

  for (let i = 1; i < score.length; i++) {
    if (i < k || honerScore[honerScore.length - 1] < score[i]) {
      honerScore.push(score[i]);
    }

    const iDaysScore = honerScore.sort((a, b) => b - a);
    console.log(`${i}일차`, iDaysScore);
    answer.push(iDaysScore[Math.min(iDaysScore.length - 1, k - 1)]);
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
  console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
  // 추가 테스트
  console.log(solution(3, [100, 30, 40, 150, 300, 200, 200]));
}

// === 문제 읽고 첫 느낌 ===
//   점점 진행이 될 수록 문제를 한번에 파악하질 못하겠다. 😂
//   k일(반복됨)마다 명예에 전당에 올라간 최소 점수를 발표하면 되는것 같음.
//   일단 풀기는 풀었음.
//   일간 명예의 전당 배열을 만들어서 계속 누적을 시킴
//   명예의 전당배열을 k일마다 자르는 것을 유지할 필요는 없고, 그냥 발표점수를 얻을 때, k번째 인덱스까지만,
//   누적시키니 답이 나오긴 했다. 😅
//   아니다. 그런데 반례를 못풀었었다.
//   k범위 내에서는 명예의 전당에 무조건 추가를 해야하는데, 그것을 하지 않았다.
//
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   상위에 문제 풀으신 분들이 다들 잘 풀으신 것 같은데, 왠지 바로 이해는 안된다. 😂
//   그리고 honerScore 배열이 너무 누적되는데, 그냥 splice(k)로 잘라버렸으면 좋았을 뻔 했다.
//
export default solution;
