import solution from './exam050-118666';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    survey: ['AN', 'CF', 'MJ', 'RT', 'NA'],
    choices: [5, 3, 2, 7, 5],
    expected: 'TCMA',
  },
  {
    survey: ['TR', 'RT', 'TR'],
    choices: [7, 1, 3],
    expected: 'RCJA',
  },
];

// cspell:enable

describe('성격 유형 검사하기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ survey, choices, expected }) => {
    expect(solution(survey, choices)).toBe(expected);
  });
});
