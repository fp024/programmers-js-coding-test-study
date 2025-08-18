import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 제일 작은 수 제거하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12935
 */
function solution(arr: number[]) {
  let answer;

  if (arr.length === 1) {
    answer = [-1];
  } else {
    const min = arr.reduce((m, n) => (m > n ? n : m), arr[0]);
    answer = arr.filter((n) => n !== min);
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(solution([4, 3, 2, 1]));
  console.log(solution([10]));
}

// === 문제 읽고 첫 느낌 ===
//    기본 sort()로 별도 정렬해서 최소값 구한다음 하면 되긴할 텐데...,
//    일단은 reduce로 최소값 찾아서 filter로 걸러냈다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//    arr을 전개한다음에 Math.min()에 넣어서 바로 최소값을 찾을 수 있었다.
//    얻은 최소값으로 인덱스 번호를 찾아서 splice로 한번에 지울 수 있음.
//    첫번째 풀이 좋다. 👍👍
//
export default solution;
