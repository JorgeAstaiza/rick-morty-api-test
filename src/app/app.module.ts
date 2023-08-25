import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { CharacterEffects } from './core/store/effects/character.effect';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './core/store/reducers/character.reducer';
import { LocationsEffects } from './core/store/effects/location.effect';
import { locationsReducer } from './core/store/reducers/location.reducer';
import { EpisodeEffects } from './core/store/effects/episode.effect';
import { episodeReducer } from './core/store/reducers/episode.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      characters: characterReducer,
      locations: locationsReducer,
      episodes: episodeReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CharacterEffects, LocationsEffects, EpisodeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
