import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 신규 아이디 추천
 *   https://school.programmers.co.kr/learn/courses/30/lessons/72410
 *
 *   Lv1 후반 문제들의 지문들이 짧은게 없음.. 다 김... 😂😂😂
 */
function solution(new_id: string) {
  let answer = '';

  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  answer = new_id.replace(/[A-Z]/g, (match) => match.toLowerCase());
  console.log('1: ', answer);

  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  answer = answer.replace(/[^a-z0-9\-_.]/g, '');
  console.log('2: ', answer);

  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  answer = answer.replace(/\.{2,}/g, '.');
  console.log('3: ', answer);

  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  answer = answer.replace(/^\.|\.$/g, '');
  console.log('4: ', answer);

  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  answer = answer.length === 0 ? 'a' : answer;
  console.log('5: ', answer);

  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  answer = answer.length >= 16 ? answer.substring(0, 15) : answer;
  console.log('6: ', answer);

  //   만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  answer =
    answer.charAt(answer.length - 1) === '.' ? answer.substring(0, answer.length - 1) : answer;

  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  if (answer.length <= 2) {
    answer = answer + answer.charAt(answer.length - 1).repeat(3 - answer.length);
  }
  console.log('7: ', answer);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution('...!@BaT#*..y.abcdefghijklm'));
  console.log(solution('z-+.^.'));
  console.log(solution('=.='));
  console.log(solution('123_.def'));
  console.log(solution('abcdefghijklmn.p'));
}

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   정규식에 대해서 잘 아는지 묻는 문제 같다.
//   콘솔 로그 찍어가면서 일단 기본 테스트는 풀었다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   숫자에 대해서는 \d, 알파멧에 대해서는 \w
//   그리고 padEnd() 사용하신 분들이 보인다.
//   2개 이하 문자열 3자리로 만들기 위해 캡쳐링 쓰신 분도 대단하다. 👍👍
//
export default solution;
