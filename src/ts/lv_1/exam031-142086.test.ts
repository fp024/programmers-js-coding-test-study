import solution from './exam031-142086';

describe('가장 가까운 글자', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('banana')) //
      .toEqual([-1, -1, -1, 2, 2, 2]);

    expect(
      solution('foobar') //
    ).toEqual([-1, -1, 1, -1, -1, -1]);
  });

  test('추가 테스트 케이스 검증', () => {
    expect(solution('aaa')) //
      .toEqual([-1, 1, 1]);

    expect(
      solution('abc') //
    ).toEqual([-1, -1, -1]);
  });
});
