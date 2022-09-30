import { EventData } from 'types/store/plansState.type';

export type AddEventData = Omit<EventData, 'id' | 'date'>;
