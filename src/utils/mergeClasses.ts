import betterAt from './betterAt';

type ConditionallyClasses = {
  [key: string]: boolean;
};

type Classes = [...string[], ConditionallyClasses] | string[];

const mergeClasses = (...classes: Classes): string => {
  const classesCopy = [...classes];
  const lastElement = betterAt(classesCopy, -1);
  const isObjectInside = typeof lastElement === 'string' ? false : true;

  if (isObjectInside) {
    classesCopy.pop();

    for (const [key, value] of Object.entries(lastElement)) {
      if (value) {
        classesCopy.push(key);
      }
    }
  }

  return classesCopy.join(' ');
};

export default mergeClasses;
