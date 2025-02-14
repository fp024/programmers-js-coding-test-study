/*
 * 문자열 섞기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181942
 */
function solution(str1, str2) {
  let answer = '';

  for (let i = 0; i < str1.length; i++) {
    answer += str1.charAt(i) + str2.charAt(i);
  }

  return answer;
}

// 단순 실행 테스트
console.log(solution('aaaaa', 'bbbbb') === 'ababababab');
