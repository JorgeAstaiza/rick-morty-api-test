import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiGeneralResponseLocation } from '../interfaces/api-response-location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  http = inject(HttpClient);
  URL = `${environment.baseUrl}/location`;

  constructor() {}

  getAllLocations(page: number): Observable<ApiGeneralResponseLocation> {
    return this.http.get<ApiGeneralResponseLocation>(
      `${this.URL}?page=${page}`
    );
  }
}
