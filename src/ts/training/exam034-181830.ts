/*
 * 정사각형으로 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181830
 */
function solution(arr: number[][]) {
  let answer: number[][] = [[]];

  const col = arr[0].length;
  const row = arr.length;

  if (col === row) {
    return arr;
  }

  if (col > row) {
    for (let i = row; i < col; i++) {
      arr.push(Array(col).fill(0));
    }
  } else if (col < row) {
    arr.forEach((c) => {
      for (let i = col; i < row; i++) {
        c.push(0);
      }
    });
  }

  answer = arr;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);

console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
