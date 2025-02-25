/*
 * 1로 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181880
 */
function solution(num_list: number[]) {
  let answer = 0;

  let divCount = 0;

  for (let n of num_list) {
    let num = n;
    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num = (num - 1) / 2;
      }
      divCount++;
    }
  }

  answer = divCount;

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution([12, 4, 15, 1, 14]));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
