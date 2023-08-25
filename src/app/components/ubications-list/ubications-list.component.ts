import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LocationInterface,
  LocationState,
} from 'src/app/core/interfaces/location.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllLocations,
  selectLoading,
} from 'src/app/core/store/selectors/location.selector';
import { getAllLocations } from 'src/app/core/store/actions/location.actions';
import { Router, RouterModule } from '@angular/router';

//Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ubications-list',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './ubications-list.component.html',
  styleUrls: ['./ubications-list.component.scss'],
})
export class UbicationsListComponent {
  router = inject(Router);
  @Input() loading$!: Observable<boolean | undefined>;
  @Input() locations!: LocationInterface[] | undefined;

  @Output() charactersIds = new EventEmitter<LocationInterface>();

  public getLocationCaracters(location: LocationInterface) {
    this.charactersIds.emit(location);
  }
}
