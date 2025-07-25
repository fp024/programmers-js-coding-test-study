/**
 * 최솟값 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */
function solution(A: number[], B: number[]) {
  let answer = 0;

  const ascA = A.sort((a, b) => a - b);
  const descB = B.sort((a, b) => b - a);

  for (const [i, v] of ascA.entries()) {
    answer += descB[i] * v;
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution([1, 4, 2], [5, 4, 4]));

  console.log(solution([1, 2], [3, 4]));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   예제 나온대로 하나는 오름차순 다른 하나는 내림 차순으로 정렬한다음.
//   인덱스 맞춰서 곱해주면 될 것 같아서 그렇게 했는데,
//   +1로 통과는 했음. 😊
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
