import { isDirectRun } from '../../utils/isDirectRun.js';
/*
   🤖 Gemini가 출제한 문제:
      가장 긴 연속된 숫자 찾기

   📝 문제 정의
      정수 배열 nums가 주어집니다. 배열에서 연속적으로 증가하는(연속된 숫자)
      가장 긴 부분 수열의 길이를 반환하는 함수를 작성하세요.

      연속된 숫자란 n, n+1, n+2, ... 순서를 의미하며, 배열 내의 위치는 상관없습니다.
      예를 들어, 배열 [100, 4, 200, 1, 3, 2]에서
      연속된 숫자의 집합은 [1, 2, 3, 4]이며, 길이는 4입니다.

   📥 입력 예시(JS)
       const nums = [100, 4, 200, 1, 3, 2];

   📤 기대 출력(JS)
       4
 */

function solution(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);

  let i = 1;
  let max = nums.length === 0 ? 0 : 1;

  while (i < sortedNums.length) {
    // 1. 수열에 조건에 맞지 않는 요소는 건너 뛰기
    while (i < sortedNums.length && sortedNums[i] - sortedNums[i - 1] !== 1) {
      i++;
    }

    // 2. 초과 되었으면 종료
    if (i >= sortedNums.length) {
      break;
    }

    // 3. 시작점 인덱스 구하기
    const startIdx = i;

    // 4. 수열 조건에 맞는 요소 체크
    while (i < sortedNums.length && sortedNums[i] - sortedNums[i - 1] === 1) {
      i++;
    }

    console.log(`max: ${max}, startIdx: ${startIdx}, i: ${i}`);
    // 5. 수열 조건에 맞는 간격을 max값과 비교해서 최대 길이 설정
    max = Math.max(max, i - startIdx + 1);
  }

  return max;
}

export default solution;

/* ========== [단순 실행 테스트]  ========== */
// cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(
    solution([
      100, //
      4,
      200,
      1,
      3,
      2,
    ])
  );
}
