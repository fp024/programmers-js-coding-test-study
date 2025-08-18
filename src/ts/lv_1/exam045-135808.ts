import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 과일 장수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/135808
 *
 * k매개 변수 관련해서... 뭔가 다른 의견들이 있다.
 *   https://school.programmers.co.kr/questions/57259
 */
function solution(k: number, m: number, score: number[]) {
  score.sort((a, b) => b - a);

  const boxes: number[][] = [];

  for (let i = 0; i < score.length; i += m) {
    boxes.push(score.slice(i, i + m));
  }

  console.log(boxes);

  return boxes.reduce((acc, box) => acc + (box.length !== m ? 0 : box[box.length - 1] * m), 0);
}
// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
  console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
}
// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
// 왜? (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) 이렇게 해야하는지는 잘 모르겠는데,
// 문제에서 제시한 공식대로 코드를 만들어서 통과는 했음.
// 결국 나는 k를 쓰지 않았다.
// 입력 값이 1 ≤ score[i] ≤ k 여서, k가 원래 의미가 없는 것 아닐까?
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
