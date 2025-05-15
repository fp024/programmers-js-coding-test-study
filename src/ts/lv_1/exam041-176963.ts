/*
 * 추억 점수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */
function solution(name: string[], yearning: number[], photo: string[][]) {
  const scoreMap: { [key: string]: number } = {};

  // {이름:점수, ... } 맵을 구성
  name.forEach((v, i) => {
    scoreMap[v] = yearning[i];
  });

  return photo.map((p) => p.map((n) => scoreMap[n] ?? 0).reduce((acc, s) => acc + s, 0));
}
// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
);
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]
  )
);
// cspell:enable

//
// === 문제 읽고 첫 느낌 ===
// 이름 배열과 점수에 대해 map을 구성해두면 편할 것 같은데...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// 첫번째 풀이 보니까... 굳이 맵을 구성하지 않아도 되긴했다.
// 이름배열과, 점수배열의 인덱스가 같아서, indexOf로 탐색하면 되었나보다 😅
// 내가 풀은 스타일은 두번째와 비슷하다.
//
export default solution;
