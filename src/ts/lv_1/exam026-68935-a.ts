import { isStandalone } from '../../utils/testHelper.js';
/*
 * 3진법 뒤집기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/68935
 */
function solution(n: number) {
  const d = decimalToBase3Str(n);
  return parseInt(d, 3);
}

function decimalToBase3Str(n: number) {
  let t = '';
  let divResult = n;

  while (divResult >= 3) {
    t = (divResult % 3) + t;
    divResult = Math.trunc(divResult / 3);
  }
  return (divResult + t).split('').reverse().join('');
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution(45));
  console.log(solution(125));

  console.log(solution(1));
  console.log(solution(2));
  console.log(solution(3));

  console.log(solution(99_999_999));
  console.log(solution(100_000_000));
}

// === 문제 읽고 첫 느낌 ===
//   입력된 수를 3진법으로 바꾸고 뒤집어서 다시 10진법으로 반환하는 문제인데,
//   3진법으로 어떻게 바꿔야하나? 이렇게 2진법을 기준으로 바꿨던 것 같다.
//   45 / 3   →  15   나머지  0
//   15 / 3   →   5   나머지  0
//    5 / 3   →   1   나머지  2
//    -------------------------
//    1  2  0  0  (3진법 결과)
//
//    나누는 수가 3보다 작아질 때까지 나누고,
//    거기 까지가면 최종 몫과 나머지들을 아래서 부터 위로 더하면 된다.
//
//    ts에서는 number 타입을 나눌 때..
//    정수나누기를 하지 않으므로 Math.trunc()를 사용해서
//    소수점이하를 버리도록 한다.
//    ts에서도 나머지 연산(%) 결과에서는 소수점이 발생하지 않는다.
//
//    3진법을 10진법으로 바꾸는 것도 문자열로 바꾸고 역순으로 만든 다음에
//    각 자리수에 3 ** index를 수행하고 reduce로 합산했다.
//    - 3 ** index는 Math.pow(3, index)와 같다.
//
//    TS/JS가 고차함수 쓰는게 매우 편해서 막쓰게되는데... 잘모르겠다.. 😅
//    Java로 했으면 뭔가 힘들었을 것 같긴한데...
//    그런데.. Java는 parseInt에 진법 기준 변환 기능이 포함되어 있음.. 😅
//
//    이 코드 제출에 테스트 케이스 10번이 실패한다.
//    ---
//    JS의 parseInt도 진법 변환이 되어서, 그부분에 맞춰서 코드를 바꾸니, 10번 테스트가 통과한다. 😅
//    10진법 변환함수는 제거했다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//    첫번째 풀이를 보면 한줄로 해결하셨던데... toString()도 인자를 주면 진법 변환이 된다.
//
export default solution;
