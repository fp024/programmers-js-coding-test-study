/*
 * flag에 따라 다른 값 반환하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181932
 */
function solution(code) {
  let mode = 0;
  let answer = '';
  [...code].forEach((c, i) => {
    if (isDigit(c)) {
      mode = mode === 0 ? 1 : 0;
      return;
    }

    if (mode === 0) {
      if (i % 2 === 0) {
        answer += c;
      }
    } else if (mode === 1) {
      if (i % 2 === 1) {
        answer += c;
      }
    }
  });

  return answer || 'EMPTY';
}

function isDigit(char) {
  return !isNaN(parseInt(char));
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  if (solution('abc1abc1abc') !== 'acbac') {
    throw Error('Test Case 01 Failed.');
  }

  if (solution('1abc') !== 'ac') {
    throw Error('Test Case 02 Failed.');
  }
}

export default solution;
// === 다른 사람 풀이 확인 이후 의견 ===
// 처음에 문제를 아예 잘못생각한 것 같다. 😅
