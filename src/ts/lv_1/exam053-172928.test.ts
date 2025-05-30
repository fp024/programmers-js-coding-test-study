import solution from './exam053-172928';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    park: [
      'SOO', //
      'OOO',
      'OOO',
    ],
    routes: [
      'E 2', //
      'S 2',
      'W 1',
    ],
    expected: [2, 1],
  },
  {
    park: [
      'SOO', //
      'OXX',
      'OOO',
    ],
    routes: [
      'E 2', //
      'S 2',
      'W 1',
    ],
    expected: [0, 1],
  },
  {
    park: [
      'OSO', //
      'OOO',
      'OXO',
      'OOO',
    ],
    routes: [
      'E 2', //
      'S 3',
      'W 1',
    ],
    expected: [0, 0],
  },
];
// cspell:enable

describe('공원 산책', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ park, routes, expected }) => {
    expect(solution(park, routes)).toEqual(expected);
  });
});
