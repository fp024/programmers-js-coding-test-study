/*
 * 배열 조각하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181893
 */
function solution(arr: number[], query: number[]) {
  query.forEach((q, i) => {
    if (i % 2 === 0) {
      arr.splice(q + 1);
    } else {
      arr.splice(0, q);
    }
  });

  const answer = arr;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
