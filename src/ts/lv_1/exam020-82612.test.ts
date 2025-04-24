import solution from './exam020-82612';

describe('부족한 금액 계산하기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(3, 20, 4)) //
      .toBe(10);
    expect(solution(3, 30, 4)) //
      .toBe(0);
    expect(solution(3, 31, 4)) //
      .toBe(0);
  });
});
