import solution from './exam011-49994';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    dirs: 'ULURRDLLU',
    expected: 7,
  },
  {
    dirs: 'LULLLLLLU',
    expected: 7,
  },
];

const EXTRA_TEST_CASES = [
  {
    dirs: 'ULR',
    expected: 2,
  },
];

// cspell:enable

describe('방문 길이', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ dirs, expected }) => {
    expect(solution(dirs)).toEqual(expected);
  });

  test.each(EXTRA_TEST_CASES)('추가 테스트 케이스 검증', ({ dirs, expected }) => {
    expect(solution(dirs)).toEqual(expected);
  });
});
