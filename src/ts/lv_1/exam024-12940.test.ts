import solution from './exam024-12940';
import solution_a from './exam024-12940-a';

describe('최대공약수와 최소공배수', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(3, 12)) //
      .toEqual([3, 12]);
    expect(solution(2, 5)) //
      .toEqual([1, 10]);

    // 유클리드 호제법 사용한 코드 테스트
    expect(solution_a(3, 12)) //
      .toEqual([3, 12]);
    expect(solution_a(2, 5)) //
      .toEqual([1, 10]);
  });
});
