import { createReducer, on } from '@ngrx/store';
import * as LocationActions from '../actions/location.actions';
import { LocationState } from '../../interfaces/location.interface';

export const initialState: LocationState = {
  loading: false,
  info: {},
  locations: [],
  location: {},
  validationErrors: null,
};

export const locationsReducer = createReducer(
  initialState,
  on(LocationActions.getAllLocations, (state) => ({
    ...state,
    loading: true,
  })),
  on(LocationActions.successGetLocations, (state, { response }) => ({
    ...state,
    locations: response.results,
    info: response.info,
    loading: false,
  }))
);
