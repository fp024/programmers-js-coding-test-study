import solution from './exam040-17681';

const DEFAULT_TEST_CASES = [
  {
    n: 5,
    arr1: [9, 20, 28, 18, 11],
    arr2: [30, 1, 21, 17, 28],
    expected: ['#####', '# # #', '### #', '# ##', '#####'],
  },
  {
    n: 6,
    arr1: [46, 33, 33, 22, 31, 50],
    arr2: [27, 56, 19, 14, 14, 10],
    expected: ['######', '### #', '## ##', ' #### ', ' #####', '### # '],
  },
];

describe('카드 뭉치', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ n, arr1, arr2, expected }) => {
    expect(solution(n, arr1, arr2)).toEqual(expected);
  });
});
