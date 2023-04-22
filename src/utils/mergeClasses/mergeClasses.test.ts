import { mergeClasses } from 'utils/mergeClasses';

describe('mergeClasses function', () => {
  it('should returne merged classes as string', () => {
    const result1 = mergeClasses('c1', 'c2', 'c3');
    const result2 = mergeClasses('c1', 'c2', 'c3', { c4: true, c5: true });

    expect(result1).toBe('c1 c2 c3');
    expect(result2).toBe('c1 c2 c3 c4 c5');
  });

  it('should return merged classes as string without keys that has falsy values', () => {
    const result = mergeClasses('class1', {
      class2: false,
      class3: true,
      class4: true,
      class5: false,
      class6: true,
      class7: false,
      class8: true,
    });

    expect(result).toBe('class1 class3 class4 class6 class8');
  });
});
