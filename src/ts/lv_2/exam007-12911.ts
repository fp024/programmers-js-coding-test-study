/**
 * 다음 큰 숫자
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */
function solution(n: number) {
  const binaryN = n.toString(2);
  const oneCount = binaryN.length - binaryN.replace(/1/g, '').length;

  let newNumberOfOneCount = 0;
  let nextNumber = -1;

  for (let i = n + 1; newNumberOfOneCount !== oneCount; i++) {
    const binaryI = i.toString(2);
    newNumberOfOneCount = binaryI.length - binaryI.replace(/1/g, '').length;
    nextNumber = i;
  }

  return nextNumber;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(78));

  console.log(solution(15));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   lv2도 점점 어려워지기 시작했다.
//   1씩 더해가면서 비교한 것이라...
//   효율성에서 탈락할 것 같지만... 동작을 확인하려고 제출을 먼저 해봤는데... 이상하게 +1 통과했다. 🤔
//   JS/TS에서 진법 변환 메서드가 간편해서 그런가?
//
//   힌트들의 제목들만 보았을 때, 뭔가 규칙성이 있다는데... 난 못찾았음. 😅
//
//   1001110   78
//   1001111   79
//   1010000   80
//   1010001   81
//   1010010   82
//   1010011   83
//
//
//     1111  15
//    10000  16
//    10001  17
//    10010  18
//    10011  19
//    10100  20
//    10101  21
//    10110  22
//    10111  23
//
//     01     1
//     10     2
//    100     4
//   1000     8
//
//
//     11     3
//    100     4
//    101     5
//    110     6
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
