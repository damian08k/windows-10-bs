const getMonthsNames = (): string[] =>
  [...Array(12).keys()].map(key =>
    new Date(0, key).toLocaleString('en', { month: 'short' }).toLowerCase(),
  );

export default getMonthsNames;
