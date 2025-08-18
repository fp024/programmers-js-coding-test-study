import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 하샤드 수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12947
 */
function solution(x: number) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, b) => acc + +b, 0);

  const answer = x % sum === 0;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(solution(10));
  console.log(solution(12));
  console.log(solution(11));
  console.log(solution(13));
}

// === 문제 읽고 첫 느낌 ===
//   WebStorm에서 켜봤는데, 꽤 할만하다.
// === 다른 사람 풀이 확인 이후 의견 ===
//   문자열 분리해서 더하지 않고, 10씩 나눠서 해결한 코드도 있었다. 괜찮아 보인다.
//
export default solution;
