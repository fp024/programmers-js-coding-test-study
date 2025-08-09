import { isStandalone } from '../../utils/testHelper.js';
/**
 * 표 편집 (정확도 통과, 효율성 시간초과)
 *   https://school.programmers.co.kr/learn/courses/30/lessons/81303
 */

/*
   문제 풀이 전략
     인덱스로 연산으로 하면 좋다고 들었는데,
     이해가 가질 않아서 일단은 내 맘데로 풀어봤다.

     한 테이블이 있으면 로우가 있고, 거기에 인덱스와 삭제 플레그를 넣어서,
     배열 기반으로 처리를 해보았는데...

     위로가기, 아래로가기, 삭제에 연산이 많아서인지..
     효율성은 6 ~ 10이 실패이다. 😅
*/

interface Row {
  index: number;
  delFlag: boolean;
}

function solution(n: number, k: number, cmd: string[]) {
  // 테이블
  const table: Row[] = [];
  // 삭제된 index를 저장하는 스택
  const delStack: number[] = [];

  for (let i = 0; i < n; i++) {
    table.push({ index: i, delFlag: false });
  }

  let cursor = k;

  for (const c of cmd) {
    const [s, mStr] = c.split(' ');
    const m = Number(mStr);

    switch (s) {
      case 'U':
        for (let step = 0; step < m; ) {
          cursor--; // 위로 한 칸 이동
          if (!table[cursor].delFlag) {
            step++; // 실제로는 1칸 이동 성공
          }
        }
        break;
      case 'D':
        for (let step = 0; step < m; ) {
          cursor++; // 아래로 한 칸 이동
          if (!table[cursor].delFlag) {
            step++; // 실제로는 1칸 이동 성공
          }
        }
        break;
      case 'C': {
        table[cursor].delFlag = true;
        delStack.push(table[cursor].index);
        // 우선 "아래쪽"을 찾아본다
        let newCursor = cursor + 1;
        // 만약 범위를 넘어가거나 모두 삭제된 행이라면
        // "위쪽"으로 찾아간다
        while (newCursor < n && table[newCursor].delFlag) {
          newCursor++;
        }
        if (newCursor >= n) {
          // 아래에 더 이상 살아 있는 행이 없다면, 위쪽 탐색
          newCursor = cursor - 1;
          while (newCursor >= 0 && table[newCursor].delFlag) {
            newCursor--;
          }
        }
        cursor = newCursor;

        break;
      }
      case 'Z':
        // 💡  if (delStack[delStack.length - 1]) 조건을 이렇게하면
        //     스택 값이 0일 때를 무시해버리게된다. length로 검사해야함.
        if (delStack.length > 0) {
          const idx = delStack.pop()!;
          table[idx].delFlag = false;
        }
        break;
    }
  }

  let answer = '';

  for (const row of table) {
    answer += row.delFlag ? 'X' : 'O';
  }
  return answer;
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
// ...
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
