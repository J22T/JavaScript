import { expect, test } from 'vitest';

import { cumSum } from './sum';
test('cumulative sum of an array', () => {
    expect(cumSum([1, 3, 5, 7])).toBe(16);
    expect(cumSum([-2, -4, -8])).toBe(-14);
});
