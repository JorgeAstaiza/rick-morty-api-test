import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  faildLoadAllCharacters,
  successLoadAllCharacters,
  loadAllCharacters,
  loadSingleCharacter,
  successLoadSingleCharacter,
  loadMultipleCharacter,
  successLoadMultipleCharacter,
} from '../actions/character.actions';
import { catchError, map, switchMap, of, debounceTime, mergeMap } from 'rxjs';
import { ApiGeneralResponseCharacter } from '../../interfaces/all-characters-response.interface';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';
import { searchCharacter } from '../actions/search.action';

@Injectable({
  providedIn: 'root',
})
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private characterServices: CharacterService
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllCharacters),
      map((action) => action.page),
      switchMap((page) =>
        this.characterServices.getAllCharacters(page).pipe(
          map((response: ApiGeneralResponseCharacter) =>
            successLoadAllCharacters({ response })
          ),
          catchError(() => of(faildLoadAllCharacters()))
        )
      )
    )
  );

  loadSingleCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSingleCharacter),
      map((action) => action.id),
      switchMap((id) =>
        this.characterServices.getSingleCharacter(id).pipe(
          map((response: Character) =>
            successLoadSingleCharacter({ response })
          ),
          catchError(() => of(faildLoadAllCharacters()))
        )
      )
    )
  );

  loadMultipleCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMultipleCharacter),
      map((action) => action.ids),
      mergeMap((ids) =>
        this.characterServices.getMultipleCharacter(ids).pipe(
          map((response) => successLoadMultipleCharacter({ response })),
          catchError(() => of(faildLoadAllCharacters()))
        )
      )
    )
  );

  searchCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCharacter),
      debounceTime(500),
      map((action) => action.value),
      switchMap((value) =>
        this.characterServices.searchCharacter(value).pipe(
          map((response: ApiGeneralResponseCharacter) =>
            successLoadAllCharacters({ response })
          ),
          catchError(() => of(faildLoadAllCharacters()))
        )
      )
    )
  );
}
