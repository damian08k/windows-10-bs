const getMonthsNames = (): { monthName: string; monthId: number }[] =>
  [...Array(12).keys()].map(key => {
    return {
      monthName: new Date(0, key).toLocaleString('en', { month: 'short' }).toLowerCase(),
      monthId: key,
    };
  });

export default getMonthsNames;
