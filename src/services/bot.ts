import { HubConnectionBuilder } from '@microsoft/signalr';
import { api } from '../app/api';
import { overrideExisting } from '../app/utils';

type Activity = 'Idle' | 'Fighting' | 'Eating' | 'Looting' | 'Navigating' | 'Dead';

export type Class =
  | 'Death Knight'
  | 'Demon Hunter'
  | 'Druid'
  | 'Evoker'
  | 'Hunter'
  | 'Mage'
  | 'Monk'
  | 'Paladin'
  | 'Priest'
  | 'Rogue'
  | 'Shaman'
  | 'Warlock'
  | 'Warrior';

export interface Bot {
  clientId: number;
  isRunning: boolean;
  health: number;
  mana: number;
  level: number;
  buffs: string[];
  activity: Activity;
  class: Class;
}

export const botApi = api.injectEndpoints({
  overrideExisting: overrideExisting(),
  endpoints: (builder) => ({
    getBots: builder.query<Bot[], void>({
      query: () => 'getBots',
      async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const connection = new HubConnectionBuilder()
          .withUrl(`${import.meta.env.VITE_BASE_URL}/gamestatehub`, { withCredentials: false })
          .build();

        await connection.start();

        try {
          await cacheDataLoaded;

          const listener = (message: Bot[]) => {
            updateCachedData(() => message);
          };

          connection.on('new-state', listener);
        } catch {}
        await cacheEntryRemoved;

        connection.stop();
      },
    }),
  }),
});

export const { useGetBotsQuery } = botApi;
