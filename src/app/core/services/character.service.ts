import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGeneralResponseCharacter } from 'src/app/core/interfaces/all-characters-response.interface';
import { Character } from 'src/app/core/interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpClient);
  URL = `${environment.baseUrl}/character`;

  constructor() {}

  getAllCharacters(page: number): Observable<ApiGeneralResponseCharacter> {
    return this.http.get<ApiGeneralResponseCharacter>(
      `${this.URL}?page=${page}`
    );
  }

  getSingleCharacter(id: number | undefined): Observable<Character> {
    return this.http.get<Character>(`${this.URL}/${id}`);
  }

  getMultipleCharacter(ids: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.URL}/${ids}`);
  }

  searchCharacter(name: string): Observable<ApiGeneralResponseCharacter> {
    return this.http.get<ApiGeneralResponseCharacter>(
      `${this.URL}/?name=${name}`
    );
  }
}
