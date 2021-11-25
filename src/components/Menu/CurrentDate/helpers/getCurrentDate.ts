type CurrentDate = {
  dateTime: string;
  currentDate: string;
};

const getCurrentDate = (): CurrentDate => {
  const newDate = new Date();
  const dateDay = newDate.getDate();
  const dateMonth = newDate.getMonth() + 1;
  const dateYear = newDate.getFullYear();

  const dateTime = `${dateYear}-${dateMonth}-${dateDay}`;
  const currentDate = `${dateDay}.${dateMonth}.${dateYear}`;

  return {
    dateTime,
    currentDate,
  };
};

export default getCurrentDate;
