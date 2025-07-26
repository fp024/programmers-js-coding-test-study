import { isStandalone } from '../../utils/testHelper.js';
/*
 * [1차] 비밀지도
 *   https://school.programmers.co.kr/learn/courses/30/lessons/17681
 */
function solution(n: number, arr1: number[], arr2: number[]) {
  return arr1.map((v, i) =>
    (v | arr2[i])
      .toString(2) //
      .padStart(n, '0')
      .replace(/1/g, '#')
      .replace(/0/g, ' ')
  );
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
  console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
}
//
// === 문제 읽고 첫 느낌 ===
//   카카오 붙은 문제들이 뭔가 어려운 것 같음.
//   문제를 천천히 보다보니 그리 어려운 문제는 아니였음. 😅
//
//   2진수로 바꿔서 OR연산을 해야하나 했는데, 그대로 10진수 정수에다가 OR연수로해도 내부적으로 2진연산이 되기때문에 그대로 써도 되었다.
//   문자열 앞에 0 패딩을 넣어주는 것은 padStart 내장 함수를 사용하면 되고,
//   replaceAll이라는 함수가 JS에서는 없고, 정규식으로 써주면 되었다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//    두번째 풀이하고 내가 비슷하게 풀은 것 같다.
//
export default solution;
