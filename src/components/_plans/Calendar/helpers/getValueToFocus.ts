import { DayElement } from 'types/components/calendar/dayElement.type';
import { DayName } from 'types/components/calendar/dayName.enum';
import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';

const { CURRENT_MONTH_DAY } = DayName;
const { HIGHLIGHTED } = YearType;

export const getElementToFocus = <T extends DayElement | YearElement>(
  listOfElements: T[],
  focusedElement: T,
) => {
  const elementToFocus = listOfElements.findIndex(element => {
    switch (element.elementName) {
      case 'day': {
        const { name, dayNumber } = element;

        return name === CURRENT_MONTH_DAY && dayNumber === (focusedElement as DayElement).dayNumber;
      }

      case 'year': {
        const { type, year } = element;

        return type === HIGHLIGHTED && year === (focusedElement as YearElement).year;
      }
    }
  });

  return elementToFocus;
};
