import { createReducer, on } from '@ngrx/store';
import * as EpisodesActions from '../actions/episode.actions';
import { EpisodeState } from '../../interfaces/episode.interface';

export const initialState: EpisodeState = {
  loading: false,
  info: {},
  episodes: [],
  episode: {},
};

export const episodeReducer = createReducer(
  initialState,
  on(EpisodesActions.getAllEpisodes, (state) => ({
    ...state,
    loading: true,
  })),
  on(EpisodesActions.successLoadAllEpisodes, (state, { response }) => ({
    ...state,
    episodes: response.results,
    info: response.info,
    loading: false,
  }))
);
