import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/interfaces/character.interface';
import { loadMultipleCharacter } from 'src/app/core/store/actions/character.actions';
import { selectMultipleCharacter } from 'src/app/core/store/selectors/character.selector';
import { selectLoading } from 'src/app/core/store/selectors/episode.selector';

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
  styleUrls: ['./episode-characters.component.scss'],
})
export class EpisodeCharactersComponent {
  store = inject(Store);

  characters$!: Observable<any>;
  charactersList!: Character[];
  loading$: Observable<boolean | undefined> = new Observable();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const ids = this.activatedRoute.snapshot.queryParams['ids'];
    if (ids) {
      this.store.dispatch(loadMultipleCharacter({ ids }));
    }
    this.loading$ = this.store.select(selectLoading);

    this.characters$ = this.store.select(selectMultipleCharacter);

    this.characters$.subscribe((res) => {
      this.charactersList = res.characters;
    });
  }
}
