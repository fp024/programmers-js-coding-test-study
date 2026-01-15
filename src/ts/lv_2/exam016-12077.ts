import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 전화번호 목록
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */

/*
   문제 풀이 전략
    1 . 전화번호부를 길이 순으로 정렬한다.
    2. 앞 번호가 뒷 번호의 접두어인지 확인한다.
      - 접두어이면 false 반환
      - 접두어가 아니면 계속 진행
    3. 모든 번호를 확인했으면 true 반환
*/

function solution(phone_book: string[]) {
  // 길이 순으로 정렬
  // 파라미터 값 자체 변경을 막기: ES2023에는 toSorted()가 있지만, 지금 타겟이 ES2022라 스프레드 연산자 사용
  const sortedPhoneBook = [...phone_book].sort((a, b) => a.length - b.length);

  for (let i = 0; i < sortedPhoneBook.length; i++) {
    let base = sortedPhoneBook[i];
    for (let j = i + 1; j < sortedPhoneBook.length; j++) {
      if (sortedPhoneBook[j].startsWith(base)) {
        return false;
      }
    }
  }

  return true;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution(['119', '97674223', '1195524421']));

  console.log(solution(['123', '456', '789']));

  console.log(solution(['12', '123', '1235', '567', '88']));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
