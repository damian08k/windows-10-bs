export type EventData = {
  id: string;
  title: string;
  timeFrom: string;
  timeTo: string;
  location: string;
  date: string;
};

export type PlansState = {
  isPlanOpen: boolean;
  isEventsVisible: boolean;
  events: EventData[];
};
