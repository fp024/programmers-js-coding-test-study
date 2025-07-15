/*
 * 문자열 다루기 기본
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12918
 */
function solution(s: string) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  return s.split('').findIndex((s) => Number.isNaN(Number(s))) < 0;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('a1234'));
  console.log(solution('1234'));
}

// === 문제 읽고 첫 느낌 ===
//   갑자기... 문자열을 숫자로 어떻게 확인하지? 해깔렸는데,
//   그냥 Number에다 넣어서, 이게 숫자인지 숫자가 아닌지 확인해주면 되었다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   length 조건을 체크해야하는 줄 몰랐다. 😂
//
export default solution;
