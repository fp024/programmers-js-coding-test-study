/*
 * 숫자 문자열과 영단어
 *   https://school.programmers.co.kr/learn/courses/30/lessons/81301
 */
function solution(s: string) {
  let answer;

  const numberSymbols = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const numbers = '0123456789';

  let answerString = '';

  // 번호가 처리된 마지막 인덱스
  let lastNumberIdx = -1;

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (numbers.indexOf(c) >= 0) {
      answerString = answerString + c;
      lastNumberIdx = i; // 단일 숫자 문자는 바로 처리할 수 있으므로 처리된 인덱스를 저장해둔다.
    } else if (i - lastNumberIdx >= 3) {
      // 적어도 영문자 처리시 3글자 이상이므로.. 인덱스 간격이 3이상일 때 검사한다.

      const partString = s.slice(lastNumberIdx + 1, i + 1);
      const idx = numberSymbols.indexOf(partString);

      if (idx >= 0) {
        answerString = answerString + numbers[idx];
        lastNumberIdx = i; // 숫자 문자열이 처리되었을 때의 인덱스를 저장해둔다.
      }
    }
  }

  answer = +answerString;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution('one4seveneight'));
  console.log(solution('23four5six7'));
  console.log(solution('2three45sixseven'));
  console.log(solution('123'));
}

// === 문제 읽고 첫 느낌 ===
//   쉽게 풀릴 줄 알았는데, 뭔가 어렵네... 😂
//   일단 또 풀긴했다.. 👍
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 풀이가 뭔가 좋아보이는데... 문자열숫자 단어로 split()으로 쪼개고...
//   거기에 join()을 사용해서 그때의 인덱스 번호를 넣어서 해결하는 방법이였다. 👍 대단~~
//
export default solution;
