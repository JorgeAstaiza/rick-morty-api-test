import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, of, mergeMap } from 'rxjs';
import { failureGetLocations } from '../actions/location.actions';
import { EpisodesService } from '../../services/episodes.service';
import {
  getAllEpisodes,
  successLoadAllEpisodes,
} from '../actions/episode.actions';
import { ApiGeneralResponseEpisode } from '../../interfaces/api-response-episodes.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodeEffects {
  constructor(
    private actions$: Actions,
    private episodesService: EpisodesService
  ) {}

  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllEpisodes),
      map((action) => action.page),
      mergeMap((page) =>
        this.episodesService.getAllEpisodes(page).pipe(
          map((response: ApiGeneralResponseEpisode) =>
            successLoadAllEpisodes({ response })
          ),
          catchError((err) => of(failureGetLocations(err)))
        )
      )
    )
  );
}
