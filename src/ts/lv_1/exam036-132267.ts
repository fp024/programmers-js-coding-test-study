/*
 * 콜라 문제
 *   https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */
function solution(a: number, b: number, n: number) {
  let answer = 0;

  let 가지고있는_콜라병 = n;

  while (가지고있는_콜라병 >= a) {
    const r = 가지고있는_콜라병 % a;
    const 교환받은_콜라병_개수 = Math.trunc((가지고있는_콜라병 - r) / a) * b;
    가지고있는_콜라병 = 가지고있는_콜라병 - (가지고있는_콜라병 - r) + 교환받은_콜라병_개수;
    answer += 교환받은_콜라병_개수;
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
