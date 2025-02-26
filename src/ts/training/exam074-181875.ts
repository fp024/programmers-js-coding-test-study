/*
 * 배열에서 문재열 대소문자 변환하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181875
 */
function solution(strArr: string[]) {
  let answer: string[] = [];

  const isOdd = (n: number) => n % 2 === 0;

  answer = strArr.map((s, i) => (isOdd(i) ? s.toLowerCase() : s.toUpperCase()));

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['AAA', 'BBB', 'CCC', 'DDD']));

console.log(solution(['aBc', 'AbC']));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
