/*
 * 전국 대회 선발 고사
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181851
 */
function solution(rank: number[], attendance: boolean[]) {
  let answer = 0;

  const mul: number[] = [10000, 100, 1];

  const rankSum = rank
    .map((r, n) => ({ rank: r, idx: n, attendance: attendance[n] })) //
    .filter((r) => r.attendance)
    .sort((a, b) => a.rank - b.rank) //
    .reduce((a, b, i) => (i < 3 ? a + b.idx * mul[i] : a), 0);

  answer = rankSum;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]));
console.log(solution([1, 2, 3], [true, true, true]));
console.log(solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true]));

// === 문제 읽고 첫 느낌 ===
//   마지막에 reduce를 쓰지말껄 그랬는지, 나도 좀 해깔린다. 😅
//   JS가 고차함수 연결하는게 뭔가 자연스러워서 좋긴함..👍
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
