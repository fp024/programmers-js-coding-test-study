import solution from './exam007-12947';

describe('하샤드 수 판별기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(10)) //
      .toBeTruthy();
    expect(solution(12)) //
      .toBeTruthy();
    expect(solution(11)) //
      .toBeFalsy();
    expect(solution(13)) //
      .toBeFalsy();
  });

  test('경계값 검증', () => {
    expect(solution(1)).toBeTruthy();
    expect(solution(9)).toBeTruthy();
    expect(solution(1000)).toBeTruthy();
  });

  test('특수 케이스 검증', () => {
    expect(solution(18)).toBeTruthy(); // 1+8=9, 18은 9로 나누어짐
    expect(solution(100)).toBeTruthy(); // 1+0+0=1, 100은 1로 나누어짐
  });
});
