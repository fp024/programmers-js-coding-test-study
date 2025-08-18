import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 문자열 여러 번 뒤집기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181913
 */
function solution(my_string, queries) {
  let answer = '';

  const myStringArray = [...my_string];

  queries.forEach(([s, e]) => {
    const target = myStringArray.slice(s, e + 1).reverse();
    myStringArray.splice(s, target.length, ...target);
  });

  answer = myStringArray.join('');
  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (isDirectRun(import.meta.url)) {
  console.log(
    solution('rermgorpsam', [
      [2, 3],
      [0, 7],
      [5, 9],
      [6, 10],
    ])
  );
}

export default solution;
// === 문제 읽고 첫 느낌 ===
// 💡 splice에 배열을 아이템을 추가할 때.. 구조분해해서 넣어야함.
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
