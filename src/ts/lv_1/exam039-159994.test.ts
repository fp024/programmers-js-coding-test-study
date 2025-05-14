import solution from './exam039-159994';

describe('카드 뭉치', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])) //
      .toBe('Yes');
    expect(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])) //
      .toBe('No');
  });
});
