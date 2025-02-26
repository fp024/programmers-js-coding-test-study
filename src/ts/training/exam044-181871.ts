/*
 * 문자열이 몇 번 등장하는지 세기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181871
 */
function solution(myString: string, pat: string) {
  let answer = 0;

  let startIndex = 0;
  while (startIndex < myString.length) {
    const findIdx = myString.indexOf(pat, startIndex);
    if (findIdx >= 0) {
      answer++;
      startIndex = findIdx + 1;
    } else {
      break;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('banana', 'ana'));

console.log(solution('aaaa', 'aa'));

// === 문제 읽고 첫 느낌 ===
//   SonarLint에서 for-of로 바꿔보라고 경고나와서 Copilot에게 고쳐보라고 맡겼더니, 그냥 코드를 완성해버렸다. 😅
//   내용을 보니 내가 하고 싶은대로, 한 자씩 검색 인덱스를 증가하는 식으로 잘 풀어냈다. 👍
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
