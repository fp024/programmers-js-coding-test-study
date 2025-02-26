/*
 * 배열 비교하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181856
 */
function solution(arr1: number[], arr2: number[]) {
  const sum = (a: number, b: number) => a + b;

  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length > arr2.length) {
    return 1;
  } else {
    const arr1Sum = arr1.reduce(sum, 0);
    const arr2Sum = arr2.reduce(sum, 0);

    if (arr1Sum < arr2Sum) {
      return -1;
    } else if (arr1Sum > arr2Sum) {
      return 1;
    } else {
      return 0;
    }
  }
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([49, 13], [70, 11, 2]));

console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));

console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));

// === 문제 읽고 첫 느낌 ===
//   뭔가 좀... 괜히 복잡하다.. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
