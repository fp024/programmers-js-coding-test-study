/*
 * 정수 내림차순으로 배치하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12933
 */
function solution(n: number) {
  let answer = n
    .toString()
    .split('')
    .sort((a, b) => parseInt(b) - parseInt(a))
    .join('');

  return +answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(118372));
}

// === 문제 읽고 첫 느낌 ===
//   이상하게 이 문제는 반환 값 타입 검사를 한다. answer 앞에 + 붙여서 number로 형변환 했음.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
