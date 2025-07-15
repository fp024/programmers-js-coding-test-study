/*
   대소문자 바꿔서 출력하기
      https://school.programmers.co.kr/learn/courses/30/lessons/181949

   테스트 사이트에서 Node 코드가 보이는게...
   예전에는 함수에 입력값을 전달해서, 결과값을 판단하는 기능을 제공하지 않아서 그런 것 같다.
   여기에다가는 알아서 solution()로 변환해서 테스트하면 될 것 같다. 😅
 */
function solution(str) {
  let result = '';

  let strArray = str.split('');

  for (const char of strArray) {
    if (char.toUpperCase() === char) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

// 검증
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution('aBcDeFg') === 'AbCdEfG'); // NOSONAR
}
