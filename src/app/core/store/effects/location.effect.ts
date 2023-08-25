import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, of } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
import {
  failureGetLocations,
  getAllLocations,
  successGetLocations,
} from '../actions/location.actions';
import { ApiGeneralResponseLocation } from '../../interfaces/api-response-location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private locationService: LocationsService
  ) {}

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllLocations),
      map((action) => action.page),
      switchMap((page) =>
        this.locationService.getAllLocations(page).pipe(
          map((response: ApiGeneralResponseLocation) =>
            successGetLocations({ response })
          ),
          catchError((err) => of(failureGetLocations(err)))
        )
      )
    )
  );
}
