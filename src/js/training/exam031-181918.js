import { isStandalone } from '../../utils/testHelper.js';
/*
 * 배열 만들기 4
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181918
 */
function solution(arr) {
  const stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.splice(stk.length - 1);
    }
  }

  return stk;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution([1, 4, 2, 5, 3]));
}

export default solution;
// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// 배열의 pop() 메서드가 배열을 수정하지 않는줄 알았다. 😅
