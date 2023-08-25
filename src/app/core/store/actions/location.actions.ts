import { createAction, props } from '@ngrx/store';

import { CharacterActionsEnum } from '../actions-types';
import { ApiGeneralResponseLocation } from '../../interfaces/api-response-location.interface';

export const getAllLocations = createAction(
  CharacterActionsEnum.AllLocations,
  props<{ page: number }>()
);

export const successGetLocations = createAction(
  CharacterActionsEnum.SuccessGetLocations,
  props<{ response: ApiGeneralResponseLocation }>()
);

export const failureGetLocations = createAction(
  CharacterActionsEnum.FailGetLocations,
  props<{ error: ApiGeneralResponseLocation }>()
);
