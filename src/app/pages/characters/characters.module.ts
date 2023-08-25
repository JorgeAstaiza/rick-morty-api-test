import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from 'src/app/components/characters-list/characters-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CharactersDetailsComponent } from 'src/app/components/characters-details/characters-details.component';
@NgModule({
  declarations: [CharactersComponent, CharactersDetailComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharactersListComponent,
    HttpClientModule,
    MatCardModule,
    CharactersDetailsComponent,
    MatIconModule,
  ],
})
export class CharactersModule {}
