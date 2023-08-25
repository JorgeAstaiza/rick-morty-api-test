import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.action';
import { Search } from '../../interfaces/character.interface';

export const initialState: Search = {
  value: '',
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchCharacter, (state, { value }) => ({
    ...state,
    value,
  }))
);
