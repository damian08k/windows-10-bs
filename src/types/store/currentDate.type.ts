export type CurrentDate = string;

// ! isMonthsView should be in other type and other slice

export type TodaysDay = {
  today: CurrentDate;
  month: number;
  year: number;
  isMonthsView: boolean;
};

export type UpdateDate = {
  month: number;
  year?: number;
};
