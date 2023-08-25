import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Character } from 'src/app/core/interfaces/character.interface';

import { Observable } from 'rxjs';

import { RouterModule } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  providers: [CharacterService],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() charactersList!: Character[];
  @Input() loading$!: Observable<boolean | undefined>;
  @Input() showDetailButton!: boolean;

  @Output() characterDetails = new EventEmitter<Character>();

  public getSingleCharacter(character: Character) {
    this.characterDetails.emit(character);
  }
}
