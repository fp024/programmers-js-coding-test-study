/*
 * 행렬의 덧셈
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12950
 */
function solution(arr1: number[][], arr2: number[][]) {
  return arr1.map(
    (
      row,
      i //
    ) => row.map((val, j) => val + arr2[i][j])
  );
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(
    solution(
      [
        [1, 2],
        [2, 3],
      ],
      [
        [3, 4],
        [5, 6],
      ]
    )
  );

  console.log(solution([[1], [2]], [[3], [4]]));
}

// === 문제 읽고 첫 느낌 ===
//   행렬은 문제가 복잡하지 않아도 등장하면 해깔린 뭔가가 있다. 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
