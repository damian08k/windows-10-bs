export type EventData = {
  title: string;
  timeFrom: string;
  timeTo: string;
  location: string;
};

export type PlansState = {
  isPlanOpen: boolean;
  isEventsVisible: boolean;
  events: EventData[];
};
