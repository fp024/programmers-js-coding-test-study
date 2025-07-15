/*
 * 부족한 금액 계산하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/82612
 */
function solution(price: number, money: number, count: number) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice - money < 0 ? 0 : totalPrice - money;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(3, 20, 4));
  console.log(solution(3, 30, 4));
  console.log(solution(3, 31, 4));
}

// === 문제 읽고 첫 느낌 ===
//   테스트 케이스 4번이 왜 틀리는지 모르겠다. 😂, 갑자기 서버 점검중인 것 같음.. 04:00이 점검시간인가?
//   소지금이 아주 큰 경우에 대해서 생각을 안한 것 같다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 분... 가우스 공식을 썼다는데.. 뭔말인지? 😅
//
export default solution;
