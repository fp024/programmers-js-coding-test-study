/**
 * 소수 찾기 - 💢 효율성 테스트 1,2,4가 실패한다.
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * @param n   숫자
 */
function solution(n: number) {
  let answer = 1; // 2는 이미 있다고 간주

  for (let i = 3; i <= n; i = i + 2) {
    // 1과 자기 자신만 약수로 가지는 수인지 확인
    if (divisorCount(i) === 2) {
      answer++;
    }
  }

  return answer;
}

// 어떤 수의 약수 카운트를 하는데, (3개까지만 검사하자.)
function divisorCount(n: number) {
  let count = 0;
  for (let i = 1; count < 3 && i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) {
        count++;
      }
    }
  }
  return count;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(10));
console.log(solution(5));

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   소수를 구하는게 항상 해깔린다.
//   다른 문제에서 풀었던 약수 개수 구하는 함수를 가져와서 활용했다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
