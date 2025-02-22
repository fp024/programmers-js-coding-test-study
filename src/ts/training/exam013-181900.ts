/*
 * 글자 지우기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181900
 */
function solution(my_string: string, indices: number[]) {
  let answer = '';

  answer = [...my_string].filter((_, i) => !indices.includes(i)).join('');

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3]));

// === 문제 읽고 첫 느낌 ===
//   filter가 약간 해깔렸다.. true일 때 제외되는 걸로 착각함. 😅
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
