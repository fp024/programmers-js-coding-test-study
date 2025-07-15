/**
 * JadenCase 문자열 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */
function solution(s: string) {
  let answer = s[0].toUpperCase();

  for (let i = 1; i < s.length; i++) {
    if (answer[answer.length - 1] === ' ') {
      answer = answer + s[i].toUpperCase();
    } else {
      answer = answer + s[i].toLowerCase();
    }
  }
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('3people unFollowed me'));

  console.log(solution('for the last week'));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   그렇게 어려울 것 같은 느낌은 안드는데...
//   answer를 검사할 때.. 끝단어만 검사하지 않느라고 좀 시간이 걸렸다.
//   +1점으로 통과 👍
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
