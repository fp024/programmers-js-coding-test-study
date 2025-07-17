import solution from './exam012-76502';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    s: '[](){}',
    expected: 3,
  },
  {
    s: '}]()[{',
    expected: 2,
  },
  {
    s: '[)(]',
    expected: 0,
  },
  {
    s: '}}}',
    expected: 0,
  },
];

// cspell:enable
describe('괄호 회전하기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ s, expected }) => {
    expect(solution(s)).toEqual(expected);
  });
});
