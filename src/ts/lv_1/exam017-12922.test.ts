import solution from './exam017-12922';

describe('수박수박수박수박수박수?', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(0)) //
      .toBe('');
    expect(solution(1)) //
      .toBe('수');
    expect(solution(2)) //
      .toBe('수박');
    expect(solution(3)) //
      .toBe('수박수');
    expect(solution(4)) //
      .toBe('수박수박');
  });
});
