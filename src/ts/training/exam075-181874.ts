/*
 * A 강조하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181874
 */
function solution(myString: string) {
  let answer = [...myString]
    .map((c) => {
      if (c === 'a') {
        return c.toUpperCase();
      } else if (c !== 'A') {
        return c.toLowerCase();
      } else {
        return c;
      }
    })
    .join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('abstract algebra'));

console.log(solution('PrOgRaMmErS'));

// === 문제 읽고 첫 느낌 ===
//   대문자 A가 포함되었을 때가 함정 이였다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
