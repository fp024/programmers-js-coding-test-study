/*
 * 배열의 길이를 2의 거듭제곱으로 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181857
 */
function solution(arr: number[]) {
  let answer: number[] = [];

  let i = 1;
  for (; i < arr.length; i *= 2);

  for (let j = arr.length; j < i; j++) {
    arr.push(0);
  }

  answer = arr;
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 2, 3, 4, 5, 6]));

console.log(solution([58, 172, 746, 89]));

console.log(solution(Array(1000).fill(0)).length);

console.log(solution([1])); // 💡 [1] 이 되야한다.

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// 2^0도 2의 거듭제곱 수로 볼 수있어서, 1의 길이의 배열이 들어오면 1로 처리해야한다.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
