/*
 * 배열의 원소만큼 추가하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181861
 */
function solution(arr: number[]) {
  let answer: number[] = [];

  for (let a of arr) {
    for (let i = 0; i < a; i++) {
      answer.push(a);
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([5, 1, 4]));

console.log(solution([6, 6]));

console.log(solution([1]));

// === 문제 읽고 첫 느낌 ===
//   대문자 A가 포함되었을 때가 함정 이였다. 😅
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   map() 이후에 .flat() 처리하는 것도 좋아보인다.
export default solution;
