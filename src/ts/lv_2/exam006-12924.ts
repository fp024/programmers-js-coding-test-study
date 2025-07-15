/**
 * 숫자의 표현
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n: number) {
  let answer = 0;
  let halfN = Math.trunc(n / 2);

  if (n <= 2) {
    return 1;
  }

  for (let i = halfN + 1; i >= 1; i--) {
    let sum = 0;
    for (let j = i; sum <= n && j >= 1; j--) {
      sum += j;
      if (sum === n) {
        answer++;
      }
    }
  }

  return answer + 1;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(15));

  console.log(solution(2));

  console.log(solution(1));
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   뭔가 바로 떠오르는 문제는 아님?
//   2중 루프를 제거해야 통과가 될 것 같다. 😂
//   효율성 3, 5, 6이 실패하는 상태 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
