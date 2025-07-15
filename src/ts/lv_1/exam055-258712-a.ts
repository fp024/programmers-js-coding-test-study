/**
 * 가장 많이 받은 선물 - AI 코드 리뷰
 *   https://school.programmers.co.kr/learn/courses/30/lessons/258712
 */
function solution(friends: string[], gifts: string[]) {
  const giftHistory: Record<string, Record<string, number>> = {};

  // ID별 선물지수,  다음달 받을 선물 카운트
  const [giftPoints, nextMonthGiftCount] = initializeCounters(friends);

  for (let senderReceiversPair of gifts) {
    const [sender, receiver] = senderReceiversPair.split(' ');
    // 객체가 없으면 초기화
    if (!giftHistory[sender]) {
      giftHistory[sender] = {};
    }

    // 카운트 증가 (기존 값이 없으면 0에서 시작)
    giftHistory[sender][receiver] = (giftHistory[sender][receiver] || 0) + 1;

    // 선물 지수 업데이트
    giftPoints[sender]++;
    giftPoints[receiver]--;
  }

  // 💡 입출력 예 #1의 준사람 \ 받은사람 관계를객체 형태로 나타냄.
  console.log('=== ID별 선물 주고 받은 관계 ===');
  console.log(giftHistory);

  // 💡 선물지수
  console.log('=== ID별 선물 지수 ===');
  console.log(giftPoints);

  // 선물 ID 쌍별로 다음달 받을 선물 수 계산
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friend1 = friends[i];
      const friend2 = friends[j];

      const friend1to2Count = giftHistory[friend1]?.[friend2] || 0;
      const friend2to1Count = giftHistory[friend2]?.[friend1] || 0;

      if (friend1to2Count > friend2to1Count) {
        nextMonthGiftCount[friend1]++;
      } else if (friend1to2Count < friend2to1Count) {
        nextMonthGiftCount[friend2]++;
      } else {
        const friend1GiftPoint = giftPoints[friend1];
        const friend2GiftPoint = giftPoints[friend2];

        if (friend1GiftPoint > friend2GiftPoint) {
          nextMonthGiftCount[friend1]++;
        } else if (friend1GiftPoint < friend2GiftPoint) {
          nextMonthGiftCount[friend2]++;
        }
      }
    }
  }

  // ID 별 다음달 받을 선물 카운트
  console.log('-- ID별 다음달 받을 선물 카운트 --');
  console.log(nextMonthGiftCount);

  return Math.max(...Object.values(nextMonthGiftCount));
}

// 헬퍼 함수
function initializeCounters(friends: string[]) {
  const giftPoints: Record<string, number> = {};
  const nextMonthGiftCount: Record<string, number> = {};

  for (const friend of friends) {
    giftPoints[friend] = 0;
    nextMonthGiftCount[friend] = 0;
  }

  return [giftPoints, nextMonthGiftCount];
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(
    solution(
      ['muzi', 'ryan', 'frodo', 'neo'], //
      [
        'muzi frodo',
        'muzi frodo',
        'ryan muzi',
        'ryan muzi',
        'ryan muzi',
        'frodo muzi',
        'frodo ryan',
        'neo muzi',
      ]
    )
  );

  console.log(
    solution(
      ['joy', 'brad', 'alessandro', 'conan', 'david'], //
      [
        'alessandro brad',
        'alessandro joy',
        'alessandro conan',
        'david alessandro',
        'alessandro david',
      ]
    )
  );

  console.log(
    solution(
      ['a', 'b', 'c'], //
      [
        'a b', //
        'b a',
        'c a',
        'a c',
        'a c',
        'c a',
      ]
    )
  );
}

// cspell:enable
// === 문제 읽고 첫 느낌 ===
//   AI에게 코드리뷰를 부탁했다. 관련 내용 수정
//     0. 💡아주 복잡했던 hasOwnProperty 사용 부분 개선 👍
//     1. 선물 지수를 모든 if/else조건에 넣은 부분 한번만 넣기 😅
//     2. 카운터 맵 초기화 맵 생성을 별도 함수로 분리
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
