import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationState } from '../../interfaces/location.interface';

export const loadingState = createFeatureSelector<LocationState>('locations');

export const selectLoading = createSelector(
  loadingState,
  (state: LocationState) => state.loading
);

export const selectAllLocations = createSelector(
  loadingState,
  (state: LocationState) => ({
    info: state.info,
    locations: state.locations,
  })
);
