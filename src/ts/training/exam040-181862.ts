/*
 * 세 개의 구분자
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181862
 */
function solution(myStr: string) {
  let answer: string[] = [];

  answer = [...myStr]
    .map((c) => c.replace(/[abc]/g, ','))
    .join('')
    .split(/,+/g)
    .filter((c) => c !== '');

  return answer.length == 0 ? ['EMPTY'] : answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('baconlettucetomato'));

console.log(solution('abcd'));

console.log(solution('cabab'));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//   그냥 split()하고 다음에 filter() 처리만해도 되었을 것 같은데, 너무 돌려 생각한 것 같다.😅
export default solution;
