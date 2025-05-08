import solution from './exam034-81301';

describe('숫자 문자열과 영단어', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution('one4seveneight')) //
      .toBe(1478);
    expect(solution('23four5six7')) //
      .toBe(234567);
    expect(solution('2three45sixseven')) //
      .toBe(234567);
    expect(solution('123')) //
      .toBe(123);
  });
});
