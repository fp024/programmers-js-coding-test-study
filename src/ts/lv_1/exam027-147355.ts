/*
 * 크기가 작은 부분 문자열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
function solution(t: string, p: string) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) {
      answer += 1;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution('3141592', '271'));
  console.log(solution('500220839878', '7'));
  console.log(solution('10203', '15'));
}

// === 문제 읽고 첫 느낌 ===
//   p의 길이만큼 t를 잘 쪼개는게 중요한 것 같다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 사람들하고 비슷하게 풀은 것 같다.
//
export default solution;
