import { isStandalone } from '../../utils/testHelper.js';
/**
 * 소수 만들기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * @param nums   숫자 배열
 */
function solution(nums: number[]) {
  let answer = 0;
  const N = nums.length;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(n: number) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(solution([1, 2, 3, 4]));
  console.log(solution([1, 2, 7, 6, 4]));
}

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   개별 요소의 소수를 구하는 건 별로 문제는 아닌데,
//   3중 루프를 사용해서 3개를 골라내는 것만 잘 생각하면 될 것 같다.
//   전에도 위처럼 3중 루프로 해결하는 문제가 있었다.
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
