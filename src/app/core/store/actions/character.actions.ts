import { createAction, props } from "@ngrx/store";
import { AllCharactersResponse } from "../../interfaces/all-characters-response.interface";

export const loadAllCharacters = createAction(
  '[Characters List] Load All Characters',
);

export const SuccessLoadAllCharacters = createAction(
  '[Character Component, List Character Component] Load List Success',
  props<{ response: AllCharactersResponse }>()
);

export const FaildLoadAllCharacters = createAction(
  '[Character Component, List Character Component] Load List Failured',
);
// export const action2Success = createAction(
//   '[Characters List] action2Description Success',
//   props<{payload2Type}>()
// );

// export const action3Failure = createAction(
//   '[NameSpace] action3Description Failure',
//   props<{payload3Type}>()
// );
