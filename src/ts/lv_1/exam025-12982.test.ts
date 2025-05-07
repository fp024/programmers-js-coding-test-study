import solution from './exam025-12982';

describe('예산', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution([1, 3, 2, 5, 4], 9)) //
      .toEqual(3);
    expect(solution([2, 2, 3, 3], 10)) //
      .toEqual(4);
  });
});
