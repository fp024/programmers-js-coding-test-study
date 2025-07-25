/*
 * 푸드 파이트 대회
 *   https://school.programmers.co.kr/learn/courses/30/lessons/134240
 */
function solution(food: number[]) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    const foodCount = food[i];

    const perPerson = Math.trunc(foodCount / 2);

    if (perPerson >= 1) {
      answer = answer + i.toString().repeat(perPerson);
    }
  }

  const otherPerson = answer.split('').reverse().join('');

  answer = answer + '0' + otherPerson;

  return answer;
}
// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution([1, 3, 4, 6]));
  console.log(solution([1, 7, 1, 2]));
}

// === 문제 읽고 첫 느낌 ===
//   뭔가 문제 파악이 바로 안된다. 😂
//   0번 인덱스는 중앙에 들어갈 수 있는 한번 먹을 수 있는 물이니까 항상 1이고,
//   중앙에 위치만 잘 잡아주면 추가로 고려할 사항을 없을 것 같다.
//   1번 인덱스 이상 부터는 두명이 나눠먹을 수 있는 수 여야되는건가?
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   첫 번째 풀이한사람과 로직은 거의 비슷하다고 보면 될 것 같긴하다. 😅
//
export default solution;
