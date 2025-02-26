/*
 * 공백으로 구분하기 2
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181868
 */
function solution(my_string: string) {
  return my_string.split(/\s+/g).filter((s) => s !== '');
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(' i    love  you'));

console.log(solution('    programmers  '));

// === 문제 읽고 첫 느낌 ===
//   정규식에서 \w이 white space인줄 착각하고 있었음. 😂
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
//    전, 후 공백에 대해서는 그냥 trim을 먼저 하고 할 껄 그랬나보다.
export default solution;
