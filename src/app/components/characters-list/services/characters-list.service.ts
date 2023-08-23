import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllCharactersResponse } from 'src/app/core/interfaces/all-characters-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {
  http = inject(HttpClient)
  URL = `${environment.baseUrl}/character`

  constructor() { }

  getAllCharacters(): Observable<AllCharactersResponse> {
    return this.http.get<AllCharactersResponse>(this.URL)
  }
}
