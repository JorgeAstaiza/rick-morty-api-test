import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiGeneralResponseEpisode } from '../interfaces/api-response-episodes.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  http = inject(HttpClient);

  URL = `${environment.baseUrl}/episode`;

  constructor() {}

  getAllEpisodes(page: number): Observable<ApiGeneralResponseEpisode> {
    return this.http.get<ApiGeneralResponseEpisode>(`${this.URL}?page=${page}`);
  }
}
