/**
 * 소수 찾기 - "에라토스테네스의 체" 알고리즘 사용
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12921
 *
 *   이건 AI가 알려준데로 작성해보자!
 * @param n   숫자
 */
function solution(n: number) {
  // 2부터 n까지의 숫자를 모두 true로 초기화
  // 인덱스 번호를 소수의 의미로 사용하기 위해 배열의 크기에 1을 더해준다.
  const isPrime = new Array(n + 1).fill(true);

  // 0과 1은 소수가 아님
  isPrime[0] = isPrime[1] = false;

  // 에라토스테네스의 체 실행
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      // i의 배수들을 모두 false로 표시
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes: number[] = isPrime.reduce((primes, isPrime, num) => {
    if (isPrime) primes.push(num);
    return primes;
  }, []);

  console.log(primes);

  return primes.length;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (process.env.VITEST_WORKER_ID === undefined) {
  console.log(solution(10));
  console.log(solution(5));
}

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   "에라토스테네스의 체"를 사용
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   프로그래머스 사이트에서 속도를 확인할 수 있는데,
//   이게 훨씬 빠르다. 👍
//
export default solution;
