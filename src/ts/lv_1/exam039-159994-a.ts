/*
 * 카드 뭉치 - 다른 사람의 풀이 - 추천 2위
 *   https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
function solution(cards1: string[], cards2: string[], goal: string[]) {
  let j = 0;
  let k = 0;

  for (let g of goal) {
    if (g === cards1[j]) {
      j++;
    } else if (g === cards2[k]) {
      k++;
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(
    solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])
  );
  console.log(
    solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])
  );
  console.log(solution(['a', 'b', 'c'], ['d', 'e', 'f'], ['a', 'd', 'f']));
}

//
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
