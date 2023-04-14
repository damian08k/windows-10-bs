import { getSplittedToday } from 'utils/calendar/getSplittedToday';

it('should return object with three numbers - day, month (as month index) and year', () => {
  // given
  const today = '22.05.2022';
  // when
  const result = getSplittedToday(today);
  // then
  expect(result).toEqual(
    expect.objectContaining({
      day: 22,
      month: 4,
      year: 2022,
    }),
  );
});
