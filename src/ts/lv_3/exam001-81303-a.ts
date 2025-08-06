import { isStandalone } from '../../utils/testHelper.js';
/**
 * 표 편집 - 인덱스 기반의 연결 리스트
 *   https://school.programmers.co.kr/learn/courses/30/lessons/81303
 */

/*
    문제 풀이 전략
      실제로 이중 연결 리스트를 만들어서 해보려다,
      삭제/복구 기능이 효율도 더 떨어지면서,
      코드도 훨씬 복잡해질 것이 빤이 보여서,
      그렇게 진행하던 코드는 일단 접었다. 😂

      각 행의 앞/뒤 인덱스를 저장하는 배열을 만들어서 처리

      ---
      현재 상황: A ← k → B
      k를 삭제하고 A와 B를 직접 연결하려면?

      prevIndexes[nextIndexes[k]] = prevIndexes[k]; // 오른쪽에서 왼쪽으로 읽으면 편하다.
             ↑ B의 prev를          ← A로 설정
      "k의 다음 노드(B)의 이전 포인터를 k의 이전 노드(A)로 연결"

      nextIndexes[prevIndexes[k]] = nextIndexes[k];
             ↑ A의 next를        → B로 설정
      "k의 이전 노드(A)의 다음 포인터를 k의 다음 노드(B)로 연결"
      ---
      삭제 전: A ←→ k ←→ B
      삭제 후: A ←────→ B  (k는 연결에서 제외)
*/

function solution(n: number, k: number, cmd: string[]) {
  // 각 행의 앞 인덱스를 저장하는 배열
  const prevIndexes = Array.from({ length: n + 2 }) //
    .map((_, i) => i - 1);

  // 각 행의 뒤 인덱스를 저장하는 배열
  const nextIndexes = Array.from({ length: n + 2 }) //
    .map((_, i) => i + 1);

  // 삭제된 행의 인덱스 저장 스택
  const delStack: number[] = [];

  // 현재 인덱스: prevIndexes, nextIndexes를 앞부분을 1 늘려놔서 현재 선택 행 위치에 1을 더해야한다.
  k = k + 1;

  // 명령어 처리
  for (let c of cmd) {
    let [command, mStr] = c.split(' ');
    const moveDistance = Number(mStr);

    switch (command) {
      case 'U':
        for (let i = 0; i < moveDistance; i++) {
          k = prevIndexes[k];
        }
        break;
      case 'D':
        for (let i = 0; i < moveDistance; i++) {
          k = nextIndexes[k];
        }
        break;
      case 'C':
        prevIndexes[nextIndexes[k]] = prevIndexes[k];
        nextIndexes[prevIndexes[k]] = nextIndexes[k];
        delStack.push(k);
        k = n < nextIndexes[k] ? prevIndexes[k] : nextIndexes[k];
        break;
      case 'Z':
        const restoreIndex = delStack.pop();
        if (restoreIndex) {
          nextIndexes[prevIndexes[restoreIndex]] = restoreIndex;
          prevIndexes[nextIndexes[restoreIndex]] = restoreIndex;
        }
        break;
    }
  }
  const answer = Array.from({ length: n }, () => 'O');

  for (const deletedIndex of delStack) {
    answer[deletedIndex - 1] = 'X';
  }
  return answer.join('');
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
if (isStandalone()) {
  console.log(
    solution(8, 2, [
      'D 2', //
      'C',
      'U 3',
      'C',
      'D 4',
      'C',
      'U 2',
      'Z',
      'Z',
    ])
  );
  console.log(
    solution(8, 2, [
      'D 2', //
      'C',
      'U 3',
      'C',
      'D 4',
      'C',
      'U 2',
      'Z',
      'Z',
      'U 1',
      'C',
    ])
  );
  console.log(solution(3, 2, ['C']));
}
// cspell:enable
// === 문제 읽고 첫 느낌 ===
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
