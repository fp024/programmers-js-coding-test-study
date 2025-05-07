import solution from './exam029-12930';

describe('이상한 문자 만들기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('try hello world')) //
      .toBe('TrY HeLlO WoRlD');
  });
});
