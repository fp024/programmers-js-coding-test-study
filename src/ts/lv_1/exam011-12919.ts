import { isStandalone } from '../../utils/testHelper.js';
/*
 * 서울에서 김서방 찾기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12919
 */
function solution(seoul: string[]) {
  const idx = seoul.findIndex((v, i) => v === 'Kim');

  return `김서방은 ${idx}에 있다`;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution(['Jane', 'Kim']));
}

// === 문제 읽고 첫 느낌 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
