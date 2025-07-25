import { describe, expect, test } from 'vitest';
import solution from './exam007-181943.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution('He11oWor1d', 'lloWorl', 2)).toBe('HelloWorld');
  });

  test('TestCase 02', () => {
    expect(solution('Program29b8UYP', 'merS123', 7)).toBe('ProgrammerS123');
  });
});
