import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { part1, part2 } from './index.js';

const input = readFileSync(`${__dirname}/test.txt`, 'utf8');

describe('Day 22', () => {
  it('Part 1', () => {
    expect(part1(input)).toBe(6032);
  });

  it('Part 2', () => {
    expect(part2(input)).toBe(5031);
  });
});
