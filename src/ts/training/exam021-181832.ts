/*
 * 정수를 나선형으로 배치하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181832
 */
const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
type Direction = (typeof Direction)[keyof typeof Direction];

function solution(n: number) {
  const cube: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  let row = 0;
  let col = 0;
  let direction: Direction = Direction.RIGHT;
  let v = 1;

  while (v <= n * n) {
    cube[row][col] = v++;

    if (direction === Direction.RIGHT) {
      if (col < n - 1 && cube[row][col + 1] === 0) {
        col++;
      } else {
        direction = Direction.DOWN;
        row++;
      }
    } else if (direction === Direction.DOWN) {
      if (row < n - 1 && cube[row + 1][col] === 0) {
        row++;
      } else {
        direction = Direction.LEFT;
        col--;
      }
    } else if (direction === Direction.LEFT) {
      if (col > 0 && cube[row][col - 1] === 0) {
        col--;
      } else {
        direction = Direction.UP;
        row--;
      }
    } else if (direction === Direction.UP) {
      if (row > 0 && cube[row - 1][col] === 0) {
        row--;
      } else {
        direction = Direction.RIGHT;
        col++;
      }
    }
  }

  return cube;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(4));
console.log(solution(5));

// === 문제 읽고 첫 느낌 ===
//   기초단계에서는 제일 어려운 문제같은데... 😂, 진짜 어려운것 같은데...
// === 힌트 ===
//   * 다른 분 댓글
//     나선형이니 범위 밖이나 이미 숫자가 있는 칸을 만나기 전까지
//     "오른쪽" - "아래" - "왼쪽" - "위"의 순서를 반복해서 포인터가 이동 할 것입니다.
//     나머지 연산을 이용하면 4개의 순서를 반복하게 할 수 있어요.
//     언제 방향을 꺾어야 할 지 조건을 생각해 보면서 조건문을 작성하는 것부터 해보는 것이 어떨까요?
//   * 뭔가 심오하다!
//     * https://school.programmers.co.kr/questions/76926
// === 다른 사람 풀이 확인 이후 의견 ===
//   * 💡그나마 아래 링크의 코드를 보면서 TS로 바꿨다.
//     * https://school.programmers.co.kr/questions/75142
// === 기타 참고 ===
// * https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh
export default solution;
