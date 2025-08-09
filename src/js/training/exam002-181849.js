/*
 * 문자열 정수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/181849
 */
export default function solution(num_str) {
  let answer = 0;

  const numArray = num_str.split('');

  for (const num of numArray) {
    answer += Number(num);
  }

  return answer;
}
