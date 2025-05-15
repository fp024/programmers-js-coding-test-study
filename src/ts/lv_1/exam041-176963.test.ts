import solution from './exam041-176963';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    name: ['may', 'kein', 'kain', 'radi'],
    yearning: [5, 10, 1, 3],
    photo: [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
    expected: [19, 15, 6],
  },
  {
    name: ['kali', 'mari', 'don'],
    yearning: [11, 1, 55],
    photo: [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
    expected: [67, 0, 55],
  },
  {
    name: ['may', 'kein', 'kain', 'radi'],
    yearning: [5, 10, 1, 3],
    photo: [
      ['may'], //
      ['kein', 'deny', 'may'],
      ['kon', 'coni'],
    ],
    expected: [5, 15, 0],
  },
];
// cspell:enable

describe('추억 점수', () => {
  test.each(DEFAULT_TEST_CASES)(
    '기본 테스트 케이스 검증',
    ({ name, yearning, photo, expected }) => {
      expect(solution(name, yearning, photo)).toEqual(expected);
    }
  );
});
