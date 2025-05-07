/*
 * 예산
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12982
 */
function solution(d: number[], budget: number) {
  let answer = 0;
  let sum = 0;

  const s = d.sort((a, b) => a - b);

  for (let i = 0; i < s.length && sum <= budget; i++) {
    sum += s[i];
    if (sum <= budget) {
      answer++;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([1, 3, 2, 5, 4], 9));

console.log(solution([2, 2, 3, 3], 10));

// === 문제 읽고 첫 느낌 ===
//   이번은 뭔가 머리를 써야되는 문제같다.
//   예산(budget)으로 얼마나 많은 부서들에 지원해줄 수 있는지에 대한 문제인데..
//   그냥 d를 오름 차순 정렬한 다음에 최소요청 비용 기준으로만 하면 될까?
//
//   일단 그렇게 해서 제출을 해봤는데, 통과는 했다. 😅
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 사람 풀이도 일단 처음에 정렬을 한다.
//
export default solution;
