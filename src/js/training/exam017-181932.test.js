import { describe, expect, test } from 'vitest';
import solution from './exam017-181932.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution('abc1abc1abc')).toBe('acbac');
  });

  test('TestCase 02', () => {
    expect(solution('1abc')).toBe('ac');
  });
});
