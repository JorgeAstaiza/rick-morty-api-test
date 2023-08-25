import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../../interfaces/character.interface';

export const loadingState = createFeatureSelector<CharacterState>('characters');

export const selectLoading = createSelector(
  loadingState,
  (state: CharacterState) => state.loading
);

export const selectCharacters = createSelector(
  loadingState,
  (state: CharacterState) => ({
    info: state.info,
    characters: state.characters,
  })
);

export const selectSingleCharacter = createSelector(
  loadingState,
  (state: CharacterState) => ({ character: state.character })
);

export const selectMultipleCharacter = createSelector(
  loadingState,
  (state: CharacterState) => ({ characters: state.characters })
);
