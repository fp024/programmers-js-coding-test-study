/*
 * 홀짝 구분하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181944
 */
function solution(my_string, overwrite_string, s) {
  let answer = '';

  const origin = my_string.split('');

  origin.splice(s, overwrite_string.length, overwrite_string);

  answer = origin.join('');

  return answer;
}

export default solution;
