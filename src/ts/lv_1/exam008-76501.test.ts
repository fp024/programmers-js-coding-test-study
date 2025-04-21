import solution from './exam008-76501';

describe('음양 더하기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([4, 7, 12], [true, false, true])) //
      .toBe(9);
    expect(solution([1, 2, 3], [false, false, true])) //
      .toBe(0);
  });
});
