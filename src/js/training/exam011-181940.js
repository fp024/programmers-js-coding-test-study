/*
 * 문자열 곱하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181940
 */
function solution(my_string, k) {
  let answer = '';

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}

// === 단순 실행 테스트 ===
if (solution('string', 3) != 'stringstringstring') {
  throw Error('Test Case 01 Failed.');
}

if (solution('love', 10) != 'lovelovelovelovelovelovelovelovelovelove') {
  throw Error('Test Case 02 Failed.');
}

// === 다른 사람 풀이 확인 이후 의견 ===
// repeat()를 쓰면 편리할 것 같다.
