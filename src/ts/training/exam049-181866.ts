/*
 * 문자열 잘라서 정렬하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181866
 */
function solution(myString: string) {
  let answer = myString
    .split('x')
    .filter((c) => c !== '')
    .sort((a, b) => a.localeCompare(b));

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('axbxcxdx'));

console.log(solution('dxccxbbbxaaaa'));

// === 문제 읽고 첫 느낌 ===
//
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
