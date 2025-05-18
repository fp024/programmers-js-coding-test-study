/**
 * 소수 찾기 - 나누는 수를 먼저 구한 소수들로 사용
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * @param n   숫자
 */
function solution(n: number) {
  let prime = [2];

  for (let i = 3; i <= n; i = i + 2) {
    // 1과 자기 자신만 약수로 가지는 수인지 확인
    makePrimes(i, prime);
  }

  // 나누는 수를 먼저 구한 소수로 고정해봤다.
  console.log(prime);

  return prime.length;
}

// 어떤 수의 소수를 목록을 구함
function makePrimes(n: number, prime: number[]) {
  let count = 1;

  if (prime[0] * prime[0] > n) {
    prime.push(n);
    return;
  }

  for (let i = 0; count < 2 && prime[i] * prime[i] <= n; i++) {
    if (n % prime[i] === 0) {
      count++;
      break;
    }
  }

  if (count == 1) {
    prime.push(n);
  }
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(10));
console.log(solution(5));

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   소수를 구하는게 항상 해깔린다.
//    에라토스테네스의 체를 사용하기 전에...
//     직전 연산에서 이미 구한 소수들로만 나눠서 최적화를 시도했는데,
//     효율성 테스트를 모두 통과하긴 했다. 😅
//     +2점 받음
//
// === 다른 사람 풀이 확인 이후 의견 ===
//     n이 100만개면 그만큼 배열을 만들어야되나?해서
//     에라토스테네스의 체를 아직 써보진 않았는데,
//     다른 사람 풀이보니 적용을 한 풀이들이 있다.
//
export default solution;
