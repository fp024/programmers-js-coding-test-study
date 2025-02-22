/*
 * 문자 개수 세기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181902
 */
function solution(my_string: string) {
  let answer: number[] = Array(52).fill(0);

  [...my_string].forEach((c) => {
    if (c.toLowerCase() === c) {
      const diff = 'a'.charCodeAt(0) - 'Z'.charCodeAt(0);
      answer[c.charCodeAt(0) - 'A'.charCodeAt(0) - diff + 1]++;
    } else {
      answer[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
  });
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('Programmers'));

// === 문제 읽고 첫 느낌 ===
//   a-z와 A-Z 사이에 특수 문자가 있는줄 생각하지 못했었다.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
