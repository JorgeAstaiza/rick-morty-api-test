import { createAction, props } from '@ngrx/store';
import { ApiGeneralResponseCharacter } from '../../interfaces/all-characters-response.interface';

import { CharacterActionsEnum } from '../actions-types';
import { Character } from '../../interfaces/character.interface';

export const loadAllCharacters = createAction(
  CharacterActionsEnum.LoadAllCharacters,
  props<{ page: number }>()
);

export const successLoadAllCharacters = createAction(
  CharacterActionsEnum.SuccessLoadAllCharacters,
  props<{ response: ApiGeneralResponseCharacter }>()
);

export const faildLoadAllCharacters = createAction(
  CharacterActionsEnum.FaildLoadAllCharacters
);

export const loadSingleCharacter = createAction(
  CharacterActionsEnum.LoadSingleCharacter,
  props<{ id: number | undefined }>()
);

export const successLoadSingleCharacter = createAction(
  CharacterActionsEnum.SuccessLoadSingleCharacter,
  props<{ response: Character }>()
);

export const loadMultipleCharacter = createAction(
  CharacterActionsEnum.loadMultipleCharacter,
  props<{ ids: string }>()
);

export const successLoadMultipleCharacter = createAction(
  CharacterActionsEnum.SuccessLoadMultipleCharacter,
  props<{ response: Character[] }>()
);
