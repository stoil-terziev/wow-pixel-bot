import { api } from '../app/api';
import { overrideExisting, providesList } from '../app/utils';

export interface Client {
  id: number;
  isRunning: boolean;
}

interface ClientResponse {
  ClientID: number;
  IsRunning: boolean;
}

export interface Route {
  id: string;
  label: string;
}

export const clientApi = api.injectEndpoints({
  overrideExisting: overrideExisting(),
  endpoints: (builder) => ({
    getClients: builder.query<Client[], void>({
      query: () => 'getClients',
      transformResponse: (result: ClientResponse[]) =>
        result.map(({ IsRunning, ClientID }) => ({ id: ClientID, isRunning: IsRunning })),
      providesTags: (result) => providesList(result, 'Client'),
    }),
    getRoutes: builder.query<Route[], void>({
      query: () => 'getRoutes',
      providesTags: (result) => providesList(result, 'Route'),
    }),
  }),
});

export const { useGetClientsQuery, useGetRoutesQuery } = clientApi;
