/**
 * 가장 많이 받은 선물
 *   https://school.programmers.co.kr/learn/courses/30/lessons/258712
 */
function solution(friends: string[], gifts: string[]) {
  let answer = 0;

  let senderAndReceiversObj: Record<string, Record<string, number>> = {};

  // ID별 선물지수
  const giftPoints: Record<string, number> = {};
  for (const f of friends) {
    giftPoints[f] = 0;
  }

  // 다음달 받을 선물 카운트
  const nextMonthGiftCount: Record<string, number> = {};
  for (const f of friends) {
    nextMonthGiftCount[f] = 0;
  }

  for (let senderReceiversPair of gifts) {
    const [sender, receiver] = senderReceiversPair.split(' ');

    if (senderAndReceiversObj.hasOwnProperty(sender)) {
      if (senderAndReceiversObj[sender].hasOwnProperty(receiver)) {
        senderAndReceiversObj[sender][receiver]++;
        giftPoints[sender]++;
        giftPoints[receiver]--;
      } else {
        senderAndReceiversObj[sender][receiver] = 1;
        giftPoints[sender]++;
        giftPoints[receiver]--;
      }
    } else {
      senderAndReceiversObj[sender] = {};
      senderAndReceiversObj[sender][receiver] = 1;
      giftPoints[sender]++;
      giftPoints[receiver]--;
    }
  }

  // 💡 입출력 예 #1의 준사람 \ 받은사람 관계를객체 형태로 나타냄.
  console.log('=== ID별 선물 주고 받은 관계 ===');
  console.log(senderAndReceiversObj);

  // 💡 선물지수
  console.log('=== ID별 선물 지수 ===');
  console.log(giftPoints);

  // 선물 ID 쌍별로 다음달 받을 선물 수 계산
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friend1 = friends[i];
      const friend2 = friends[j];

      const friend1to2Count = senderAndReceiversObj[friend1]?.[friend2] || 0;

      const friend2to1Count = senderAndReceiversObj[friend2]?.[friend1] || 0;

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

  for (let [_, giftCount] of Object.entries(nextMonthGiftCount).values()) {
    answer = Math.max(answer, giftCount);
  }

  return answer;
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
//   현시점 (2025년 6월 3일) Lv1의 마지막 문제이다. 😅
//   이미, C++, Java로 풀었는데...
//   * C++: https://github.com/fp024/programmers-c-coding-test-study/blob/master/lv01/Exam001_258712.cpp
//   * Java: https://github.com/fp024/programmers-java-coding-test-study/blob/master/src/test/java/org/fp024/lv01/Exam258712Tests.java
//
//   오랜만에 JS/TS 스터디 프로젝트를 열였더네... 이 문제에 대해 진행하다 말은 코드가 있어서, JS/TS로도 해보기로 했다.
//
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
