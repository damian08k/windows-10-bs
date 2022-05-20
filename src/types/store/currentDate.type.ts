export type CurrentDateState = {
  today: string;
  month: number;
  year: number;
};

export type UpdateDate = {
  month: number;
  year?: number;
};
