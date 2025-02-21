/*
 * 부분 문자열 이어 붙여 문자열 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181911
 */
function solution(my_strings: string[], parts: number[][]) {
  let answer = '';
  answer = my_strings.map((s, i) => s.slice(parts[i][0], parts[i][1] + 1)).join('');
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);

// === 문제 읽고 첫 느낌 ===
// string을 굳이 전개연산 할 필요없이, 바로 slice를 쓸 수 있다. 그러면 flatMap()을 안써도 됨. 😓
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
