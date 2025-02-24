/*
 * 홀수 vs 짝수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181887
 */
function solution(num_list: number[]) {
  let answer = 0;

  let evenSum = 0;
  let oddSum = 0;

  num_list.forEach((v, i) => {
    if ((i + 1) % 2 === 0) {
      evenSum += v;
    } else {
      oddSum += v;
    }
  });

  answer = evenSum > oddSum ? evenSum : oddSum;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   맞다! 마지막에 Math.max 쓸껄 그랬다.
export default solution;
