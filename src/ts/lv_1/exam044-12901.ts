/*
 * 2016년
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12901
 */
function solution(a: number, b: number) {
  const DAY_NAMES = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const targetDays = MONTH_DAYS.filter((_, i) => i < a - 1).reduce((acc, d) => acc + d, 0) + b - 1;
  console.log(targetDays);
  return DAY_NAMES[targetDays % DAY_NAMES.length];
}
// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(5, 24));
console.log(solution(1, 1));
// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
// 잘 짜맞추어서 풀긴 했음.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// 두번째 푸신 분하고 비슷하게 풀었다.
//
export default solution;
