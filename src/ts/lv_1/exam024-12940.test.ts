import solution from './exam024-12940';

describe('최대공약수와 최소공배수', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(3, 12)) //
      .toEqual([3, 12]);
    expect(solution(2, 5)) //
      .toEqual([1, 10]);
  });
});
