import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSingleCharacter } from 'src/app/core/store/selectors/character.selector';

import { MatCardModule } from '@angular/material/card';
import { CharacterService } from 'src/app/core/services/character.service';
import { Character } from 'src/app/core/interfaces/character.interface';

@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent {
  @Input() character$!: Observable<any>;
}
