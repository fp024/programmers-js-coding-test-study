import solution from './exam028-131705';

describe('삼총사', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([-2, 3, 0, 2, -5])) //
      .toBe(2);
    expect(solution([-3, -2, -1, 0, 1, 2, 3])) //
      .toBe(5);
    expect(solution([-1, 1, -1, 1])) //
      .toBe(0);
  });
});
