/*
 * 조건 문자열
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181934
 */
function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq == '<') {
    answer = n < m ? 1 : 0;
  } else if ('>') {
    answer = n > m ? 1 : 0;
  }

  if (eq == '=') {
    answer |= n == m ? 1 : 0;
  } else if ('!') {
    answer &= n != m ? 1 : 0;
  }

  return answer;
}

// === 단순 실행 테스트 ===
if (solution('<', '=', 20, 50) !== 1) {
  throw Error('Test Case 01 Failed.');
}

if (solution('>', '!', 41, 78) !== 0) {
  throw Error('Test Case 02 Failed.');
}

// === 다른 사람 풀이 확인 이후 의견 ===
//   맨위에 좋아요 가장 높은 풀이가 꽤 괜찮아보인다.
//   operations라는 연산함수를 가지는 맵을 생성해서 해결하셨는데,
//   뭔가 간단하면서도 명확해보인다. 👍
