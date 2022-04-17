export type CurrentDate = string;

export type TodaysDay = {
  today: CurrentDate;
  month: number;
  year: number;
};

export type UpdateDate = {
  month: number;
  year?: number;
};
