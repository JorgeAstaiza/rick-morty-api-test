import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from 'src/app/core/interfaces/episode.interface';
import { Observable } from 'rxjs';

//Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
})
export class EpisodesListComponent {
  @Input() episodes!: Episode[] | undefined;
  @Input() loading$!: Observable<boolean | undefined>;

  @Output() charactersEpisode = new EventEmitter<Episode>();

  public getEpisodeCaracters(episode: Episode) {
    this.charactersEpisode.emit(episode);
  }
}
