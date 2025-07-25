import { describe, expect, test } from 'vitest';
import solution from './exam033-181916.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(2, 2, 2, 2)).toBe(2222);
  });

  test('TestCase 02', () => {
    expect(solution(4, 1, 4, 4)).toBe(1681);
  });

  test('TestCase 03', () => {
    expect(solution(6, 3, 3, 6)).toBe(27);
  });

  test('TestCase 04', () => {
    expect(solution(2, 5, 2, 6)).toBe(30);
  });

  test('TestCase 05', () => {
    expect(solution(6, 4, 2, 5)).toBe(2);
  });
});
