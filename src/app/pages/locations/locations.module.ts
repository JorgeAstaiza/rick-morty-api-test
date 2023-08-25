import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { UbicationsListComponent } from 'src/app/components/ubications-list/ubications-list.component';
import { LocationCharactersComponent } from './location-characters/location-characters.component';
import { CharactersListComponent } from 'src/app/components/characters-list/characters-list.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LocationsComponent, LocationCharactersComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    UbicationsListComponent,

    CharactersListComponent,
    MatCardModule,
    MatIconModule,
  ],
})
export class LocationsModule {}
