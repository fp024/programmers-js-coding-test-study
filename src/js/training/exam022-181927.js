/*
 * 마지막 두 원소
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181927
 */
function solution(num_list) {
  const lastValue = num_list[num_list.length - 1];
  const lastPreValue = num_list[num_list.length - 2];

  if (lastValue > lastPreValue) {
    num_list.push(lastValue - lastPreValue);
  } else {
    num_list.push(lastValue * 2);
  }

  return num_list;
}

// === 단순 실행 테스트 ===
// NOSONAR

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// 맨 위에 있는 풀이가 꽤 좋다.
