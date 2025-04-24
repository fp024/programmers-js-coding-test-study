import solution from './exam019-12917';

describe('문자열 내림차순으로 배치하기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('Zbcdefg')) //
      .toBe('gfedcbZ');
  });
});
