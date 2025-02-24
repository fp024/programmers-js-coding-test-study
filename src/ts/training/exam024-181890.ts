/*
 * 왼쪽 오른쪽
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181890
 */
function solution(str_list: string[]) {
  let answer: string[] = [];

  const lIdx = str_list.findIndex((c) => c === 'l');
  const rIdx = str_list.findIndex((c) => c === 'r');

  console.log(lIdx, rIdx);

  if (lIdx >= 0 && rIdx === -1) {
    answer = str_list.slice(0, lIdx);
  } else if (rIdx >= 0 && lIdx === -1) {
    answer = str_list.slice(rIdx + 1);
  } else if (lIdx < rIdx) {
    answer = str_list.slice(0, lIdx);
  } else if (lIdx > rIdx) {
    answer = str_list.slice(rIdx + 1);
  }

  if (lIdx === -1 && rIdx === -1) {
    answer = [];
  }
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['u', 'u', 'l', 'r']));
console.log(solution(['l']));

// === 문제 읽고 첫 느낌 ===
//   뭔가 간단히 끝날 문제인 줄 알았는데, 뭔가 복잡하다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//    첫번째 풀이 단순하고 괜찮은 것 같다. 👍
export default solution;
