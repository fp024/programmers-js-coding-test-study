import solution from './exam017-181932.js';

describe('solution', () => {
  it('TestCase 01', () => {
    expect(solution('abc1abc1abc')).toBe('acbac');
  });

  it('TestCase 02', () => {
    expect(solution('1abc')).toBe('ac');
  });
});
