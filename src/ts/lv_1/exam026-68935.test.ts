import { describe, expect, test } from 'vitest';
import solution from './exam026-68935';
import solution_a from './exam026-68935-a';

describe('3진법 뒤집기', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution(45)) //
      .toBe(7);
    expect(solution(125)) //
      .toBe(229);
  });

  test('추가 테스트 케이스 검증', () => {
    expect(solution(1)) //
      .toBe(1);
    expect(solution(2)) //
      .toBe(2);
    expect(solution(3)) //
      .toBe(1);
    expect(solution(99_999_999)) //
      .toBe(13_433_519);
    expect(solution(100_000_000)) //
      .toBe(56_480_240);
  });
});

describe('3진법 뒤집기 - A', () => {
  test('기본 테스트 케이스 검증', () => {
    expect(solution_a(45)) //
      .toBe(7);
    expect(solution_a(125)) //
      .toBe(229);
  });

  test('추가 테스트 케이스 검증', () => {
    expect(solution_a(1)) //
      .toBe(1);
    expect(solution_a(2)) //
      .toBe(2);
    expect(solution_a(3)) //
      .toBe(1);
    expect(solution_a(99_999_999)) //
      .toBe(13_433_519);
    expect(solution_a(100_000_000)) //
      .toBe(56_480_240);
  });
});
