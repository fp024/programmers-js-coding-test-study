/*
 * l로 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181834
 */
function solution(myString: string) {
  let answer = '';

  answer = [...myString]
    .map((c) => {
      if (c.charCodeAt(0) < 'l'.charCodeAt(0)) {
        return 'l';
      } else {
        return c;
      }
    })
    .join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('abcdevwxyz'));

console.log(solution('jjnnllkkmm'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
