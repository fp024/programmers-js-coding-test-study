import solution from './exam042-136798';

// cspell:disable
const DEFAULT_TEST_CASES = [
  {
    number: 5,
    limit: 3,
    power: 2,
    expected: 10,
  },
  {
    number: 10,
    limit: 3,
    power: 2,
    expected: 21,
  },
];
// cspell:enable

describe('기사단원의 무기', () => {
  test.each(DEFAULT_TEST_CASES)('기본 테스트 케이스 검증', ({ number, limit, power, expected }) => {
    expect(solution(number, limit, power)).toEqual(expected);
  });
});
