/*
 * 문자열 돌리기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181945
 */
function solution(str) {
  str.split('').forEach((c) => console.log(c));
}

if (process.env.JEST_WORKER_ID === undefined) {
  solution('abcde');
}
