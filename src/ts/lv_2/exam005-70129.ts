/**
 * 이진 변환 반복하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */
function solution(s: string) {
  let zeroCount = 0;
  let loopCount = 0;
  while (s !== '1') {
    const prevSLength = s.length;
    const zeroClearedS = s.replace(/0/g, '');
    zeroCount += prevSLength - zeroClearedS.length;
    s = parseInt('' + zeroClearedS.length).toString(2);
    loopCount++;
  }

  return [loopCount, zeroCount];
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution('110010101001'));

console.log(solution('01110'));

console.log(solution('1111111'));

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   문제가 길때는 잠깐 휴대폰으로 천천히 읽고 하는게 나은 것 같다.
//   모니터로 보면 집중이 안됨. 😅
//   +1점 통과.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
