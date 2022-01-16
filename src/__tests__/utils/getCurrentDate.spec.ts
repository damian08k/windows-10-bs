import getCurrentDate from 'utils/getCurrentDate';

test('function should return object with three strings', () => {
  const result = getCurrentDate();

  expect(result).toStrictEqual(
    expect.objectContaining({
      dateTime: expect.any(String),
      currentDateDMYFormat: expect.any(String),
      currentDateNamesFormat: expect.any(String),
    }),
  );
});
