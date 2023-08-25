import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Search } from '../../interfaces/character.interface';

export const loadingState = createFeatureSelector<Search>('search');

export const selectSearchCharacter = createSelector(
  loadingState,
  (state: Search) => state.value
);
