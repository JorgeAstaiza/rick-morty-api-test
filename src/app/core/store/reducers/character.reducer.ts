import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from '../actions/character.actions';
import { CharacterState } from '../../interfaces/character.interface';

const initialState: CharacterState = {
  loading: false,
  info: {},
  characters: [],
  character: {},
};

export const characterReducer = createReducer(
  initialState,
  on(CharacterActions.loadAllCharacters, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterActions.successLoadAllCharacters, (state, { response }) => ({
    ...state,
    loading: false,
    info: response.info,
    characters: response.results,
    // characters: response.results,
  })),
  on(CharacterActions.faildLoadAllCharacters, (state) => ({
    ...state,
    loading: false,
  })),
  on(CharacterActions.loadSingleCharacter, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterActions.successLoadSingleCharacter, (state, { response }) => ({
    ...state,
    loading: false,
    character: response,
  })),
  on(CharacterActions.loadMultipleCharacter, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterActions.successLoadMultipleCharacter, (state, { response }) => ({
    ...state,
    loading: false,
    characters: response,
  }))
);
