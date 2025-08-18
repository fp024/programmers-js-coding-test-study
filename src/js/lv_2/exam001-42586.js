import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 기능 개발
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */
/* === [문제 풀이 전략] ===
  1. 진도율과 작업속도로 각 작업의 배포일시를 구함
  2. 배포시 목록을 반복하면서
     앞배포 보다 뒤 배포가 작으면 줄줄이 같이 배포되도록 카운트함 😅
*/

/**
 * @param {number[]} progresses - 각 작업의 진도율 배열
 * @param {number[]} speeds - 각 작업의 개발 속도 배열
 * @returns {number[]} 각 배포마다 몇 개의 기능이 배포되는지 배열로 반환
 */
function solution(progresses, speeds) {
  const answer = [];

  /** @type {number[]} */
  const releaseDays = Array.from(progresses.length);

  for (const [i, progress] of progresses.entries()) {
    releaseDays[i] = Math.ceil((100 - progress) / speeds[i]);
  }

  console.log('예상 배포일: ', releaseDays);

  for (let i = 0; i < releaseDays.length; ) {
    let day = 0;

    for (let j = i; j < releaseDays.length; j++) {
      if (releaseDays[i] >= releaseDays[j]) {
        day++;
      } else {
        break;
      }
    }
    answer.push(day);
    // 늘어난 day만큼 건너 뛰기
    i += day;
  }

  return answer;
}

/* ========== [단순 실행 테스트]  ========== */
// cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(solution([93, 30, 55], [1, 30, 5]));
  console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
  console.log(solution([95], [1]));
}

export default solution;
// === 문제 후기 ===
// 일단은 예상 배포일을 콘솔에 찍고 보다보니, 그후로는 잘 풀렸다. 👍
//
