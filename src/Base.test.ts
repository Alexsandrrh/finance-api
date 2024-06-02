import { beforeEach, describe, expect, it } from 'vitest';

import { Base } from './Base';

describe('Base', () => {
  let base: Base;

  beforeEach(() => {
    base = new Base();
  });

  it('should be construct', () => {
    expect(base).toBeInstanceOf(Base);
  });
});
