import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';

const routes: Routes = [
  {
    path: 'characters-list',
    component: CharactersComponent,
  },
  {
    path: 'character-datail',
    component: CharactersDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
