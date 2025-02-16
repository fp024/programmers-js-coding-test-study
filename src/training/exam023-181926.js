/*
 * 수 조작하기 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181926
 */
function solution(n, control) {
  const keyMap = { w: 1, s: -1, d: 10, a: -10 };

  control.split('').forEach((k) => {
    n += keyMap[k];
  });

  return n;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
//   string을 전개해도 split 안써도 되는구나..
