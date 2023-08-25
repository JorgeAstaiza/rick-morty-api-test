import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';

const routes: Routes = [
  {
    path: 'list',
    component: EpisodesComponent,
  },
  {
    path: 'characters',
    component: EpisodeCharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
