/*
 * 최대공약수와 최소공배수
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12940
 */
function solution(n: number, m: number) {
  const gcdValue = gcd(n, m);
  const lcmValue = (n / gcdValue) * m;

  return [gcdValue, lcmValue];
}

function gcd(n: number, m: number) {
  const min = Math.min(n);

  let gcdValue = 1;

  for (let i = 2; i <= min; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdValue = i;
    }
  }

  return gcdValue;
}

// === 단순 실행 테스트 ===
// NOSONAR
console.log(solution(3, 12));

console.log(solution(2, 5));

// === 문제 읽고 첫 느낌 ===
//   최대공약수(GCD) 최소공배수(LCM)는 항상 좋은방법이 생각이 바로 안남.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
