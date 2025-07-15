/*
 * 카드 뭉치
 *   https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
function solution(cards1: string[], cards2: string[], goal: string[]) {
  let cards1StartIndex = 0;
  let cards2StartIndex = 0;
  let answer = 'Yes';

  for (let g of goal) {
    const cards1FoundIndex = cards1.indexOf(g, cards1StartIndex);
    if (cards1FoundIndex >= 0) {
      if (cards1FoundIndex - cards1StartIndex > 1) {
        answer = 'No';
        break;
      }
      cards1StartIndex = cards1FoundIndex;
    } else {
      const cards2FoundIndex = cards2.indexOf(g, cards2StartIndex);
      if (cards2FoundIndex >= 0) {
        if (cards2FoundIndex - cards2StartIndex > 1) {
          answer = 'No';
          break;
        }
        cards2StartIndex = cards2FoundIndex;
      } else {
        answer = 'No';
        break;
      }
    }
  }

  return answer;
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
// 무엇을 어떻게 하라는지는 이해를 했는데, 어거지로 풀긴 했다.
// 1. 일단은 goal에서 하나씩 꺼냄
// 2. card1에서 먼저 찾고 찾으면 검색범위를 찾은 인덱스 이후 부터 시작하게 설정
//   2-1. card1에서 없었으면 card2에서 찾고 검색 범위를 찾은 인덱스 이후 부터 시작하게 설정
// 3. 검색 시작범위를 적용하면서 검색하는 과정에서, 만약 card1, card2 모두 못찾은 경우가 발생하면
//    No로 설정하고 반복을 끝냄
//
// 💡제출을 해봤는데, 25번 테스트 케이스가 실패.
//    다음 카드 넘어갈 때.. 1개이상 간격이 있으면 실패로 간주하는 코드를 넣긴함 😅

// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
