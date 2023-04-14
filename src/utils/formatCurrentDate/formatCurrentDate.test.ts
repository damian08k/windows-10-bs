import { formatCurrentDate } from './formatCurrentDate';

test('function should return object with three strings', () => {
  const result = formatCurrentDate(new Date().toLocaleDateString());

  expect(result).toStrictEqual(
    expect.objectContaining({
      dateTime: expect.any(String),
      currentDateDMYFormat: expect.any(String),
      currentDateNamesFormat: expect.any(String),
    }),
  );
});
