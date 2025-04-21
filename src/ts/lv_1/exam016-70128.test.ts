import solution from './exam016-70128';

describe('내적', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])) //
      .toBe(3);
    expect(solution([-1, 0, 1], [1, 0, -1])) //
      .toBe(-2);
  });
});
