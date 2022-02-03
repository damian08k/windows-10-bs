import { DateElements } from 'types/components/calendar/dateElements.type';

const getDateElements = (): DateElements => {
  const date = new Date();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const year = date.getFullYear();

  return {
    month,
    year,
  };
};

export default getDateElements;
