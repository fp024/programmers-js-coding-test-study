/*
 * 문자열 뒤집기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181905
 */
function solution(my_string: string, s: number, e: number) {
  let answer = '';

  const myStrArray = [...my_string];

  answer = [
    ...myStrArray.slice(0, s),
    ...[...my_string.slice(s, e + 1)].reverse(),
    ...myStrArray.slice(e + 1),
  ].join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('Progra21Sremm3', 6, 12));
console.log(solution('Stanley1yelnatS', 4, 10));

// === 문제 읽고 첫 느낌 ===
//   toSpliced()를 사용하면 삭제한 위치에다 역순 데이터를 바로 넣어줄 수 있는데, 이게 ES2020에서는 지원하지 않는다.
// === 다른 사람 풀이 확인 이후 의견 ===
//   두번째로 좋아요 받은 풀이를 보니... splice의 3번째 인자로 데이터를 넣어줄 수 있나보다.
//
export default solution;
