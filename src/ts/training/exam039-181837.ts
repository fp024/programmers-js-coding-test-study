/*
 * 커피 심부름
 *   https://school.programmers.co.kr/learn/courses/30/lessons/181837
 */
function solution(order: string[]) {
  let answer = 0;

  const menuMap = new Map();
  menuMap.set('americano', 4500);
  menuMap.set('cafelatte', 5000);
  menuMap.set('anything', 4500);

  answer = order
    .map((o) => o.replace(/ice|hot/g, ''))
    .reduce((acc, menu) => acc + menuMap.get(menu), 0);

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything']));

console.log(solution(['americanoice', 'americano', 'iceamericano']));

// === 문제 읽고 첫 느낌 ===
// ...
// === 힌트 ===
// ...
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
export default solution;
