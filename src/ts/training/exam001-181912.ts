/*
 * 배열 만들기 5
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181912
 */
function solution(intStrs: string[], k: number, s: number, l: number) {
  const answer: number[] = [];

  intStrs.forEach((v) => {
    const partStr = [...v].slice(s, s + l);
    const partNumber = Number(partStr.join(''));
    if (partNumber > k) {
      answer.push(partNumber);
    }
  });

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
