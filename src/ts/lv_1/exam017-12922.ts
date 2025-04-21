/*
 * 수박수박수박수박수박수?
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12922
 */
function solution(n: number) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += '수';
    } else {
      answer += '박';
    }
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3));
console.log(solution(4));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   두번째가 괜찮은데... '수박'에 대한 반복을 하고 끝에 '수'를 추가할지말지 결정하면 되는구나? 😅👍
//
export default solution;
