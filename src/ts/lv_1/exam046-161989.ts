/**
 * 덧칠하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/161989
 * @param n   벽 길이(미터)
 * @param m   롤러의 길이(미터)
 * @param section 페인트를 칠하기로한 구역의 번호
 */
function solution(n: number, m: number, section: number[]) {
  let answer = 0;

  let filledIdx = 0;

  for (const emptyWallPos of section) {
    if (filledIdx >= emptyWallPos) {
      continue;
    }
    filledIdx = emptyWallPos + m - 1;
    answer++;
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(8, 4, [2, 3, 6]));
  console.log(solution(5, 4, [1, 3]));
  console.log(solution(4, 1, [1, 2, 3, 4]));
}
// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
// 어렵다 어려워~~
// 그런데 잘 생각해보면...
// 페인트를 칠하는 영역기준으로만 인덱스를 옮겨가면서 진행하면 될 것 같음.
// 칠하는 영역이 벽의 크기를 넘어가지 않으므로, 2번째에서 넘치것을 생각할 필요가 없고,
// 넘치거나 같아졌을 때 그냥 끝내면 됨.
//
//
// === 다른 사람 풀이 확인 이후 의견 ===
// 1번 풀이를 보니까 더 간단한 것 같다. 😅
//
export default solution;
