import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodesListComponent } from 'src/app/components/episodes-list/episodes-list.component';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CharactersListComponent } from 'src/app/components/characters-list/characters-list.component';

@NgModule({
  declarations: [EpisodesComponent, EpisodeCharactersComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    EpisodesListComponent,
    MatCardModule,
    MatIconModule,
    CharactersListComponent,
  ],
})
export class EpisodesModule {}
