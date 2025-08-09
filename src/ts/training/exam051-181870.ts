/*
 * ad 제거하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181870
 */
function solution(strArr: string[]) {
  const answer: string[] = strArr.filter((s) => s.indexOf('ad') < 0);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['and', 'notad', 'abcd']));

console.log(solution(['there', 'are', 'no', 'a', 'ds']));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
