/*
 * 문자열 내 마음대로 정렬하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12915
 */
function solution(strings: string[], n: number) {
  return strings.sort((a, b) => {
    const result = a.charAt(n) < b.charAt(n) ? -1 : a.charAt(n) > b.charAt(n) ? 1 : 0;
    return result === 0 ? a.localeCompare(b) : result;
  });
}
// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));

// === 문제 읽고 첫 느낌 ===
//   sort에 비교함수를 적당히 넣으면 될 것 같았는데.. 쉽게 잘되었다.
//   해당 인덱스의 문자가 같으면 전체를 사전순으로 정렬하라는 것을 놓쳐서 다시 조건을 넣어서 통과했다. 😅
//
//   처음에 한글자 문자열 비교할 때.. localeCompare를 썼는데..  === 연산으로 바꾸었다.
//
//   입력 단어가 길이가 같고 모두 소문자가 보장되는데다가...
//   JS에서는 <, >, === 로도 사전순으로 대소비교를 할 수 있기 때문에, 여러글자 단어의 비교에도
//   localeCompare를 쓰지 않아도 되긴했다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
