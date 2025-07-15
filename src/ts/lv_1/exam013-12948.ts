/*
 * 핸드폰 번호 가리기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12948
 */
function solution(phone_number: string) {
  let answer;

  const maskingCount = phone_number.length - 4;
  answer = '*'.repeat(maskingCount) + phone_number.slice(maskingCount);

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('01033334444'));
  console.log(solution('027778888'));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
