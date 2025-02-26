/*
 * x 사이의 개수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181867
 */
function solution(myString: string) {
  let answer: number[] = [];

  answer = myString.split('x').map((s) => s.length);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('oxooxoxxox'));

console.log(solution('xabcxdefxghi'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
