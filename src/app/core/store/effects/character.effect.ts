import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAllCharacters, loadedAllCharacters } from '../actions/character.actions'
import { CharactersListService } from 'src/app/components/characters-list/services/characters-list.service';

@Injectable({
  providedIn: 'root'
})
export class NameEffects {

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllCharacters),
      map((action) => action.page),
      mergeMap((page) =>
        this.characterServices.getAllCharacters().pipe(
          map((response) => loadedAllCharacters({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );


  constructor(private actions$: Actions, characterServices: CharactersListService) {}

  actionName$ = this.actions$.pipe(ofType(class.actionName));

}