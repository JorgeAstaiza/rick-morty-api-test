import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Episode,
  EpisodeState,
} from 'src/app/core/interfaces/episode.interface';
import { getAllEpisodes } from 'src/app/core/store/actions/episode.actions';
import {
  selectAllEpisodes,
  selectLoading,
} from 'src/app/core/store/selectors/episode.selector';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);
  episodes$!: Observable<EpisodeState>;
  loading$!: Observable<boolean | undefined>;
  episodes!: Episode[] | undefined;

  ngOnInit(): void {
    this.store.dispatch(getAllEpisodes({ page: 1 }));
    this.episodes$ = this.store.select(selectAllEpisodes);
    this.loading$ = this.store.select(selectLoading);

    this.episodes$.subscribe((res) => {
      this.episodes = res.episodes;
    });
  }

  public getCharactersEpisode(episode: any) {
    const charactersByEpisode = episode.characters;
    const charactersIds = [];

    for (const iterator of charactersByEpisode) {
      const splitUrl = iterator.split('/');
      charactersIds.push(splitUrl[splitUrl.length - 1]);
    }
    this.router.navigate(['/episodes/characters'], {
      queryParams: { ids: charactersIds.join(',') },
    });
  }
}
