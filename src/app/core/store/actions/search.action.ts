import { createAction, props } from '@ngrx/store';

import { CharacterActionsEnum } from '../actions-types';

export const searchCharacter = createAction(
  CharacterActionsEnum.SearchCharacter,
  props<{ value: string }>()
);
