import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/core/services/character.service';
import { selectSingleCharacter } from 'src/app/core/store/selectors/character.selector';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent {
  characterServices = inject(CharacterService);
  store = inject(Store);

  character$!: Observable<any>;

  ngOnInit(): void {
    this.character$ = this.store.select(selectSingleCharacter);
  }
}
