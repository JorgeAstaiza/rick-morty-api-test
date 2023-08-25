import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { LocationCharactersComponent } from './location-characters/location-characters.component';

const routes: Routes = [
  {
    path: 'list',
    component: LocationsComponent,
  },
  {
    path: 'characters',
    component: LocationCharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
