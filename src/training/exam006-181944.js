/*
 * 홀짝 구분하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181944
 */
function solution(n) {
  const msg = n % 2 === 0 ? `${n} is even` : `${n} is odd`;
  console.log(msg);
}

solution(0);
solution(1);
solution(2);
solution(3);
