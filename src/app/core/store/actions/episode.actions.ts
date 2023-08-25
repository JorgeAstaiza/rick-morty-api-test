import { createAction, props } from '@ngrx/store';

import { CharacterActionsEnum } from '../actions-types';
import { ApiGeneralResponseEpisode } from '../../interfaces/api-response-episodes.interface';
import { Episode } from '../../interfaces/episode.interface';

export const getAllEpisodes = createAction(
  CharacterActionsEnum.LoadAllEpisodes,
  props<{ page: number }>()
);

export const successLoadAllEpisodes = createAction(
  CharacterActionsEnum.SuccessLoadAllEpisodes,
  props<{ response: ApiGeneralResponseEpisode }>()
);

export const getDetailEpisode = createAction(
  CharacterActionsEnum.SuccessLoadCharacterEpisode,
  props<{ response: Episode }>()
);
