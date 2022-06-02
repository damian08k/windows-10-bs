export type CurrentDateState = {
  today: string;
  month: number | null;
  year: number;
};

export type UpdateDate = {
  month: number | null;
  year?: number;
};
