import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { part1, part2 } from './index.js';

const input1 = readFileSync(`${__dirname}/test.txt`, 'utf8');
const input2 = readFileSync(`${__dirname}/test2.txt`, 'utf8');

describe('Day 9', () => {
  it('Part 1', () => {
    expect(part1(input1)).toBe(13);
  });

  it('Part 2', () => {
    expect(part2(input2)).toBe(36);
  });
});
