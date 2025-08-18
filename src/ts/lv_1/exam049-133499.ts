import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 옹알이 (2)
 *   https://school.programmers.co.kr/learn/courses/30/lessons/133499
 * @param babbling 조카가 할 수 있는 발음 배열
 */
function solution(babbling: string[]) {
  let answer = 0;

  for (const b of babbling) {
    if (/(aya|ye|woo|ma)\1+/.test(b)) {
      continue; // 연속된 발음이 있으면 건너뜀
    }

    if (b.replace(/aya|ye|woo|ma/g, '').length === 0) {
      answer++;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution(['aya', 'yee', 'u', 'maa']));
  console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
}

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   연속된 발음 문제 처리를 AI가 해결해줘버렸다. 😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
