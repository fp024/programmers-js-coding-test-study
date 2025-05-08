/*
 * 최소직사각형
 *   https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */
function solution(sizes: number[][]) {
  let answer = 0;

  const sortedCard = sizes.map((card) => card.sort((a, b) => a - b));

  let maxX = sortedCard[0][0];
  let maxY = sortedCard[0][1];

  for (let i = 1; i < sortedCard.length; i++) {
    if (maxX < sortedCard[i][0]) {
      maxX = sortedCard[i][0];
    }
    if (maxY < sortedCard[i][1]) {
      maxY = sortedCard[i][1];
    }
  }

  answer = maxX * maxY;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
// === 문제 읽고 첫 느낌 ===
//   뭔가 입력데이터가 2차원 배열이다보니, 어려워보인다.
//   왠지 명함이 회전을 할 수 있으므로,
//   가로를 작은 값이 되게 회전해서 쭈욱 만든다음..
//   전체 명함의 가로 세로 최대값을 구해서 곱하면 될 것 같긴하다.
//   내 생각대로 한게 맞은 것 같다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   그런데.. 나의 코드의 문제는 a, b 2개만 비교하는데
//   sort 함수를 쓸필요는 없었다. 그냥 3중 연산자 쓰면 되긴 했음 😅
//
//   첫번째 풀이하신 분들은 reduce를 활용해서 한줄로 끝내셨는데...
//   나중에 알아보자.. 😅😅😅
//
export default solution;
