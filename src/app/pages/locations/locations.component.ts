import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LocationInterface,
  LocationState,
} from 'src/app/core/interfaces/location.interface';
import { getAllLocations } from 'src/app/core/store/actions/location.actions';
import {
  selectAllLocations,
  selectLoading,
} from 'src/app/core/store/selectors/location.selector';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);
  locations$!: Observable<LocationState>;
  loading$!: Observable<boolean | undefined>;
  locations!: LocationInterface[] | undefined;

  ngOnInit(): void {
    this.store.dispatch(getAllLocations({ page: 1 }));
    this.locations$ = this.store.select(selectAllLocations);
    this.loading$ = this.store.select(selectLoading);

    this.locations$.subscribe((res) => {
      this.locations = res.locations;
    });
  }

  public getLocationCaracters(location: LocationInterface) {
    const charactersByLocation = location?.residents;
    const charactersIds = [];
    if (charactersByLocation) {
      for (const iterator of charactersByLocation) {
        const splitUrl = iterator.split('/');
        charactersIds.push(splitUrl[splitUrl.length - 1]);
      }
      this.router.navigate(['/locations/characters'], {
        queryParams: { ids: charactersIds.join(',') },
      });
    }
  }
}
