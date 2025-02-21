/*
 * 주사위 게임 3
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181916
 */
function solution(a, b, c, d) {
  let answer = 0;

  const map = new Map();
  [a, b, c, d].forEach((e) => {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  });

  if (map.size === 1) {
    answer = map.keys().next().value * 1111;
  } else if (map.size === 4) {
    answer = [a, b, c, d].sort((a, b) => a - b)[0];
  } else if (map.size === 2 && (map.values().next().value == 3 || map.values().next().value == 1)) {
    const ent = map.entries();
    const sortedEnt = [ent.next().value, ent.next().value].sort((a, b) => a[1] - b[1]);
    const p = sortedEnt[1][0];
    const q = sortedEnt[0][0];
    answer = (10 * p + q) ** 2;
  } else if (map.size === 2 && map.values().next().value == 2) {
    const iter = map.keys();
    const val1 = iter.next().value;
    const val2 = iter.next().value;
    const p = Math.max(val1, val2);
    const q = Math.min(val1, val2);
    answer = (p + q) * (p - q);
  } else if (map.size === 3) {
    const ent = map.entries();
    const sortedEnt = [ent.next().value, ent.next().value, ent.next().value].sort(
      (a, b) => a[1] - b[1]
    );

    answer = sortedEnt[0][0] * sortedEnt[1][0];
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));

export default solution;
// === 문제 읽고 첫 느낌 ===
// 아무렇게나 짜맞춰서 풀긴했는데.. 난 뭔가 산🏔️으로 간 느낌이다.
// === 다른 사람 풀이 확인 이후 의견 ===
// 경우의 수가 얼마없는데.. 모든 경우의 수를 조건식으로 나타내는 것이 차라리 좋았다.
