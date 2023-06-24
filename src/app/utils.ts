import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

export const providesEntity =
  <T extends string>(tagType: T) =>
  <R extends string>(_result: unknown, _error: FetchBaseQueryError, id: R) =>
    [{ type: tagType, id }];

export const providesList = <R extends { id: string | number }[], T extends string>(
  resultsWithIds: R | undefined,
  tagType: T,
) =>
  resultsWithIds
    ? [{ type: tagType, id: 'LIST' }, ...resultsWithIds.map(({ id }) => ({ type: tagType, id }))]
    : [{ type: tagType, id: 'LIST' }];

/**
 * Needed during development to allow hot reloading to replace endpoints.
 * Should be used in *injectEndpoints* for all services.
 */
// export const overrideExisting = (): boolean => module.hot?.status() === 'apply';
export const overrideExisting = (): boolean => true;
