/*
 * 문자열 묶기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181855
 */
function solution(strArr: string[]) {
  let answer = 0;

  let countArray = strArr.map((c) => c.length);

  const countMap = new Map();
  for (const c of countArray) {
    countMap.set(c, countMap.get(c) === undefined ? 1 : countMap.get(c) + 1);
  }

  countMap.forEach((v, _) => {
    answer = Math.max(answer, v);
  });

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
