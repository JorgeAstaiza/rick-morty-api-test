import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EpisodeState } from '../../interfaces/episode.interface';

export const loadingState = createFeatureSelector<EpisodeState>('episodes');

export const selectLoading = createSelector(
  loadingState,
  (state: EpisodeState) => state.loading
);

export const selectAllEpisodes = createSelector(
  loadingState,
  (state: EpisodeState) => ({
    info: state.info,
    episodes: state.episodes,
  })
);
