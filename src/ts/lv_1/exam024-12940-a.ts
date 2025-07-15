/*
 * 최대공약수와 최소공배수 - 유클리드 호제법 사용
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12940
 *
 *   이미 반복문 사용한 것으로 제출을 해봤는데, 유클리드 호제법으로 사용해보자!
 *
 *   1. 두 양의 정수 a, b(a > b)에 대해서 a = bq + r (q는 몫, r은 나머지)라 하면
 *   2. a와 b의 최대공약수는 b와 r의 최대공약수와 같다는 것!
 */
function solution(n: number, m: number) {
  const gcdValue = gcd(n, m);
  const lcmValue = (n / gcdValue) * m;

  return [gcdValue, lcmValue];
}

/*
   3과 12가 들어왔을 때...
   반복     n      m
     1    12      3       // n이 커지도록 자연스럽게 반전이 일어난다.
     2     3      0

   2와 5가 들어왔을 때...
   반복     n      m
     1     5      2
     2     1      2
     3     2      1
     3     1      0
 */

function gcd(n: number, m: number) {
  while (m !== 0) {
    const temp = m;
    m = n % m;
    n = temp;
  }
  return n;
}

// === 단순 실행 테스트 ===
// NOSONAR
if (process.env.JEST_WORKER_ID === undefined) {
  console.log(solution(3, 12));

  console.log(solution(2, 5));
}

// === 문제 읽고 첫 느낌 ===
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
