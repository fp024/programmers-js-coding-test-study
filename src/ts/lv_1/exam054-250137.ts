import { isStandalone } from '../../utils/testHelper.js';
/**
 * [PCCP 기출문제] 1번 / 붕대 감기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/250137
 */
function solution(bandage: number[], health: number, attacks: number[][]) {
  const MAX_HP = health;
  const [castTime, recoverPerSec, extraRecover] = bandage;

  // 이전 공격시간
  let prevAttackTime = 0;
  // 연속 성공 시간
  let consecutiveSuccessTime = 0;

  for (const [attackTime, damage] of attacks) {
    // 공격시간 전
    for (let t = prevAttackTime + 1; t < attackTime; t++) {
      health = Math.min(health + recoverPerSec, MAX_HP);
      consecutiveSuccessTime++;

      if (consecutiveSuccessTime === castTime) {
        health = Math.min(health + extraRecover, MAX_HP);
        consecutiveSuccessTime = 0;
      }
    }

    // 공격시간
    prevAttackTime = attackTime;
    health = health - damage;
    consecutiveSuccessTime = 0;

    if (health <= 0) {
      break;
    }
  }

  const answer = health <= 0 ? -1 : health;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(
    solution(
      [5, 1, 5], //
      30,
      [
        [2, 10],
        [9, 15],
        [10, 5],
        [11, 5],
      ]
    )
  );

  console.log(
    solution(
      [3, 2, 7], //
      20,
      [
        [1, 15],
        [5, 16],
        [8, 6],
      ]
    )
  );

  console.log(
    solution(
      [4, 2, 7], //
      20,
      [
        [1, 15],
        [5, 16],
        [8, 6],
      ]
    )
  );

  console.log(
    solution(
      [1, 1, 1], //
      5,
      [
        [1, 2],
        [3, 2],
      ]
    )
  );
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   처음에는 1부터 줄줄이 시간을 반복할까하다가..
//   공격시간 기준으로 맞춰서 흐르는 시간 계산해서 하긴했는데.. 기본 테스트는 통과했다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫번째 풀이가 내가 했던 내부 반복을 계산식으로 잘 해결한 것 같다. 👍👍
//
export default solution;
