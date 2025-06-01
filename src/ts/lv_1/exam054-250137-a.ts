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

  for (let [attackTime, damage] of attacks) {
    // 공격시간 전 (반복문 대신 수학적 계산 사용)
    const healingTime = attackTime - prevAttackTime - 1; // 회복 가능한 시간
    if (healingTime > 0) {
      // 완전한 시전 주기 횟수 계산
      const completeCycles = Math.floor((consecutiveSuccessTime + healingTime) / castTime);
      // 남은 연속 성공 시간
      consecutiveSuccessTime = (consecutiveSuccessTime + healingTime) % castTime;

      // 기본 회복량 계산
      const basicHeal = healingTime * recoverPerSec;
      // 추가 회복량 계산 (완전한 주기마다)
      const bonusHeal = completeCycles * extraRecover;

      // 체력 회복 적용 (최대 체력 제한)
      health = Math.min(health + basicHeal + bonusHeal, MAX_HP);
    }

    // 공격시간
    prevAttackTime = attackTime;
    health = health - damage;
    consecutiveSuccessTime = 0;

    if (health <= 0) {
      break;
    }
  }

  return health <= 0 ? -1 : health;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
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
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   이중 for문을 없앨 수도 있겠다. 계산식으로 한번에 처리할 수도 있을 것 같긴하다.
//   그 최적화는 JetBrains AI에게 부탁했는데, 잘 해결해주었다.
//
export default solution;
