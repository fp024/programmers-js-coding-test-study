import solution from './exam028-181921.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution(5, 555)).toEqual([5, 50, 55, 500, 505, 550, 555]);
  });

  it('TestCase 02', () => {
    expect(solution(10, 20)).toEqual([-1]);
  });
});
