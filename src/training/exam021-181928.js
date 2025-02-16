/*
 * 이어 붙인 수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181928
 */
function solution(num_list) {
  let answer = 0;

  let oddString = '';
  let evenString = '';

  num_list.forEach((n) => {
    if (n % 2 == 1) {
      oddString += n;
    } else {
      evenString += n;
    }
  });

  answer = Number(oddString) + Number(evenString);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
