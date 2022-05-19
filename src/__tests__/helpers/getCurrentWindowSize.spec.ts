import getCurrentWindowSize from 'Taskbar/components/Plans/helpers/getCurrentWindowSize';

test('function should return object with two numbers larger than zero', () => {
  const result = getCurrentWindowSize();

  expect(result).toStrictEqual(
    expect.objectContaining({
      windowWidth: expect.any(Number),
      windowHeight: expect.any(Number),
    }),
  );
});
