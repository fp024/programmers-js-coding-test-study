/*
 * 가까운 1 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181898
 */
function solution(arr: number[], idx: number) {
  let answer = 0;
  let hit = false;

  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer = i;
      hit = true;
      break;
    }
  }

  return hit ? answer : -1;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
console.log(solution([1, 0], 0)); // 💡인덱스가 0이면?

// === 문제 읽고 첫 느낌 ===
//   최초 검색된 것이 0일 경우를 생각하지 않아서 테스트 케이스 3번이 틀렸었다.
// === 다른 사람 풀이 확인 이후 의견 ===
//   if 문안에서 바로 리턴했으면 별 문제 없긴 했었구나.. 😅
//
export default solution;
