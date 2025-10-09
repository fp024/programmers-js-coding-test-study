import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 다단계 칫솔 판매
 *   https://school.programmers.co.kr/learn/courses/30/lessons/77486
 */

/*
   문제 풀이 전략
     ...
*/

/**
 * 문제 해결 함수
 *
 * @param enroll 판매원 배열
 * @param referral 판매원을 조직에 참여시긴 다른 판매원의 이름
 * @param seller 판매량 집계 데이터의 판매원 이름을 나타낸 배열
 * @param amount 판매량 집게 데이터의 판매 수량을 나타낸 배열
 * @returns 각 판매원이 얻은 이익금을 나열한 배열
 */
function solution(enroll: string[], referral: string[], seller: string[], amount: number[]) {
  // 칫솔 1개의 가격
  const TOOTHBRUSH_PRICE = 100;

  // (0) 판매자-수익 맵
  const sellerProfitMap = new Map<string, number>();
  // 판매를 한번도 하지 않은 판매자도 있기 때문에,
  // 초기 수익을 0으로 반드시 초기화 해야한다.
  for (const e of enroll) {
    sellerProfitMap.set(e, 0);
  }

  // (1) 자식-부모 관게 맵
  const childParentMap = new Map<string, string>();
  for (let i = 0; i < enroll.length; i++) {
    childParentMap.set(enroll[i], referral[i]);
  }
  console.log('=== 자식 부모 관계 맵 ===');
  console.log(childParentMap);
  console.log('=========================');

  // (2) 판매를 한 판매자(seller)와 판매 수량 (amount)로 이익 분배
  for (let i = 0; i < seller.length; i++) {
    // (3) 판매자가 판매한 총 금액 계산
    let money = amount[i] * TOOTHBRUSH_PRICE;
    let currentSeller = seller[i];

    // (4) 판매자로 부터 상위노드로 이동하며 이익 분배
    while (money > 0 && currentSeller !== '-') {
      // (5) 현재 판매자가 받을 금액 계산
      const commission = Math.floor(money / 10); // 10%를 제외한 금액
      sellerProfitMap.set(
        currentSeller, //
        sellerProfitMap.get(currentSeller)! + money - commission
      );
      currentSeller = childParentMap.get(currentSeller)!;

      money = commission;
    }
  }

  // (L) 답안 작성: 계산된 판매원별 수익맵을 순서에 맞게 배열로 반환
  return enroll.map((e) => sellerProfitMap.get(e));
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(
    solution(
      ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
      ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
      ['young', 'john', 'tod', 'emily', 'mary'],
      [12, 4, 2, 5, 10]
    )
  );

  console.log(
    solution(
      ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
      ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
      ['sam', 'emily', 'jaimie', 'edward'],
      [2, 3, 5, 4]
    )
  );
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// (0), (L) 부분은 생각이 나는데, 그 다음이 머리가 아프네 😂
// 다른 사람 풀이를 보고 내가 좀 더 이해하기 쉽게 코드를 수정했다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
