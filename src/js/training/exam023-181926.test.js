import { describe, expect, test } from 'vitest';
import solution from './exam023-181926.js';

describe('solution', () => {
  test('TestCase 01', () => {
    expect(solution(0, 'wsdawsdassw')).toBe(-1);
  });
});
