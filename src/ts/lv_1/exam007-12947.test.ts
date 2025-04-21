import solution from './exam007-12947';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution(10)) //
      .toBeTruthy();
    expect(solution(12)) //
      .toBeTruthy();
    expect(solution(11)) //
      .toBeFalsy();
    expect(solution(13)) //
      .toBeFalsy();
  });
});
