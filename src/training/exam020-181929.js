/*
 * 원소들의 곱과 합
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181929
 */
function solution(num_list) {
  let answer = 0;
  let sum = 0;
  let mul = 1;

  num_list.forEach((n) => {
    sum += n;
    mul *= n;
  });

  answer = mul < sum ** 2 ? 1 : 0;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
