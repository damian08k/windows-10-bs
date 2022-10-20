import { YearType } from './yearType.type';

export type YearElement = {
  id: string;
  type: YearType;
  year: number;
  isCurrent?: boolean;
};
