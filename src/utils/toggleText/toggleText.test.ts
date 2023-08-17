import { toggleText } from './toggleText';

describe('toggleText function', () => {
  it('should change "below" to "above" in given text', () => {
    // given
    const text = 'Show below Ribbon';
    // when
    const toggledText = toggleText(text);
    // then
    expect(toggledText).toBe('Show above Ribbon');
  });

  it('should change "above" to "below" in given text', () => {
    // given
    const text = 'Show above Ribbon';
    // when
    const toggledText = toggleText(text);
    // then
    expect(toggledText).toBe('Show below Ribbon');
  });

  it('should not change words if given text is random', () => {
    // given
    const text = 'Some random text';
    // when
    const toggledText = toggleText(text);
    // then
    expect(toggledText).toBe(text);
  });
});
