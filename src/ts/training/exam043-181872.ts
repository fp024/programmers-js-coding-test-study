/*
 * 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181872
 */
function solution(myString: string, pat: string) {
  let answer = '';

  const lastIdx = myString.lastIndexOf(pat);

  answer = myString.slice(0, lastIdx + pat.length);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('AbCdEFG', 'dE'));

console.log(solution('AAAAaaaa', 'a'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
