/*
 * 특이한 이차원 배열 1
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181833
 */
function solution(n: number) {
  let answer: number[][] = Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (_, colIndex) => {
      return rowIndex == colIndex ? 1 : 0;
    })
  );

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3));

console.log(solution(6));

console.log(solution(1));

// === 문제 읽고 첫 느낌 ===
//   Array 초기화하는 방법은 잘 기억해놔야겠다. 👍
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
