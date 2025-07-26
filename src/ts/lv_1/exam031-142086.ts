import { isStandalone } from '../../utils/testHelper.js';
/*
 * 가장 가까운 글자
 *   https://school.programmers.co.kr/learn/courses/30/lessons/142086
 */
function solution(s: string) {
  let answer: number[] = [];

  // 첫글자는 항상 -1
  answer.push(-1);

  for (let i = 1; i < s.length; i++) {
    // 검색할 문자
    const c = s.charAt(i);

    // 이전 검색 인덱스 확인
    const preIdx = s.lastIndexOf(c, i - 1);

    // 거리 계산, 이전에 찾은 적이 없다면 처음 발견이므로, -1로 처리
    const distance = preIdx === -1 ? -1 : i - preIdx;

    answer.push(distance);
  }

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (isStandalone()) {
  console.log(solution('banana'));
  console.log(solution('foobar'));
  console.log(solution('aaa'));
  console.log(solution('abc'));
}

// === 문제 읽고 첫 느낌 ===
//   뭔가 바로 안풀린다...😂
//   일단 짜맞추기로 먼저 해보았다.
//   lastIndexOf에 position 값을 줘서 검색범위를 조정할 수 있는데,
//   position 값이 음수가 되면 0부터 조회한다고해서, 일단은 첫번째 글자에 대한것은 미리 -1로 넣었다.
//   뭔가 어거지로 풀은 것 같은 느낌이 듬...
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   방법들이 뭔가 다양하긴한데.. 첫번째 풀이나 두번째 풀이가 정말 코드가 단순하다.
//
export default solution;
