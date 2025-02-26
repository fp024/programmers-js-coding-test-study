/*
 * 배열의 길이에 따라 다른 연산하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181853
 */
function solution(arr: number[], n: number) {
  let answer: number[] = [];

  const isEven = (n: number) => n % 2 === 0;

  if (isEven(arr.length)) {
    answer = arr.map((v, i) => (!isEven(i) ? v + n : v));
  } else {
    answer = arr.map((v, i) => (isEven(i) ? v + n : v));
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([49, 12, 100, 276, 33], 27));

console.log(solution([444, 555, 666, 777], 100));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
