import { describe, it, expect } from 'vitest';
import { add } from './add';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5); // This test should pass
  });

  it('deliberate failure test', () => {
    expect(add(2, 2)).toBe(5); // This test should fail
  });
});
