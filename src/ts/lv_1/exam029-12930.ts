/*
 * 이상한 문자 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12930
 */
function solution(s: string) {
  let answer = '';

  for (let i = 0, adjustIndex = -1; i < s.length; i++) {
    if (s.charAt(i) === ' ') {
      answer += s.charAt(i);
      adjustIndex = i;
    } else if ((i - adjustIndex + 1) % 2 === 0) {
      answer += s.charAt(i).toUpperCase();
    } else {
      answer += s.charAt(i).toLowerCase();
    }
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution('try hello world'));
}

// === 문제 읽고 첫 느낌 ===
//   이번 문제는 그럭저럭 잘 풀었나보다, +3점 나왔다. 문자열 쪼개지 않고 charAt() 사용해서 그런 것 같긴함.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
