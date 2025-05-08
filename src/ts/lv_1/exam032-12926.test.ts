import solution from './exam032-12926';

describe('시저 암호', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('AB', 1)) //
      .toBe('BC');

    expect(
      solution('z', 1) //
    ).toBe('a');

    expect(
      solution('a B z', 4) //
    ).toBe('e F d');
  });
});
