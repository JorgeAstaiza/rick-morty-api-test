import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CharacterService } from 'src/app/core/services/character.service';
import {
  loadAllCharacters,
  loadSingleCharacter,
} from 'src/app/core/store/actions/character.actions';
import {
  selectCharacters,
  selectLoading,
} from 'src/app/core/store/selectors/character.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characterServices = inject(CharacterService);
  store = inject(Store);

  data$: Observable<any> = new Observable();
  charactersList!: Character[];
  loading$: Observable<boolean | undefined> = new Observable();

  ngOnInit(): void {
    this.store.dispatch(loadAllCharacters({ page: 1 }));
    this.loading$ = this.store.select(selectLoading);
    this.data$ = this.store.select(selectCharacters);
    this.data$.subscribe((res) => {
      this.charactersList = res.characters;
    });
  }

  public getSingleCharacter(character: Character) {
    this.store.dispatch(loadSingleCharacter({ id: character.id }));
  }
}
