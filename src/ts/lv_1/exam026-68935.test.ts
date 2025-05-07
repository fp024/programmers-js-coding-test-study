import solution from './exam026-68935';

describe('3진법 뒤집기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(45)) //
      .toEqual(7);
    expect(solution(125)) //
      .toEqual(229);
  });
});
