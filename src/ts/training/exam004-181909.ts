/*
 * 접미사 배열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181909
 */
function solution(my_string: string) {
  const answer: string[] = [];

  for (let i = 1; i < my_string.length; i++) {
    answer.push(my_string.slice(i, my_string.length));
  }

  answer.sort((a, b) => a.localeCompare(b));

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('banana'));
console.log(solution('programmers'));

// === 문제 읽고 첫 느낌 ===
// 그냥 sort()사용하려다.. SonarLint 경고가 나왔는데 다음과 같은 장점이 있다고 한다.
// localeCompare의 장점:
//   1. 언어별 정렬: 언어별로 사전순 정렬 규칙을 적용할 수 있습니다.
//   2. 대소문자 구분: localeCompare의 옵션을 사용하여 대소문자를 구분하거나 무시할 수 있습니다.
//   3. 숫자 문자열 정렬: 숫자 문자열을 올바르게 정렬할 수 있습니다.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
