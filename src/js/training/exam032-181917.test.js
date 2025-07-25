import { describe, expect, test } from 'vitest';
import solution from './exam032-181917.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(false, true, true, true)).toBe(true);
  });

  test('TestCase 02', () => {
    expect(solution(true, false, false, false)).toBe(false);
  });
});
