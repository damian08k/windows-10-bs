import { mergeClasses } from 'utils/mergeClasses';

describe('mergeClasses util tests', () => {
  it('should return joined classes as string when object is is added as last parameter', () => {
    // given
    // when
    const result = mergeClasses('class1', 'class2', 'class3', { class4: true, class5: true });
    // then
    expect(result).toBe('class1 class2 class3 class4 class5');
  });

  it('should return joined classes as string when object is not added to class list', () => {
    // given
    // when
    const result = mergeClasses('class1', 'class2', 'class3', 'class4');
    // then
    expect(result).toBe('class1 class2 class3 class4');
  });

  it('should return joined classes as string without keys that has falsy values in added object', () => {
    // given
    // when
    const result = mergeClasses('class1', {
      class2: false,
      class3: true,
      class4: true,
      class5: false,
      class6: true,
      class7: false,
      class8: true,
    });
    // then
    expect(result).toBe('class1 class3 class4 class6 class8');
  });
});
