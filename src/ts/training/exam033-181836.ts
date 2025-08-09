/*
 * 그림 확대
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181836
 */
function solution(picture: string[], k: number) {
  const answer: string[] = [];

  for (const p of picture) {
    // 가로 늘리기
    const expendWidth = [...p].map((c) => c.repeat(k)).join('');
    // 세로 늘리기
    for (let i = 0; i < k; i++) {
      answer.push(expendWidth);
    }
  }
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution(
    [
      '.xx...xx.', //
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2
  )
);

console.log(
  solution(
    [
      'x.x', //
      '.x.',
      'x.x',
    ],
    3
  )
);

// === 문제 읽고 첫 느낌 ===
// 세로늘리기가 단순 복사라 그다지 어렵지는 않았다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
