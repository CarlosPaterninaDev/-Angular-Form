import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IngModel } from './ng-model';
import { delay } from 'rxjs/operators';

const URL_API = 'https://putsreq.com/U0FMPpfNQ0Rp8vEuvPbi';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingForm(modelForm: IngModel): Observable<any> {
    return this.http.post(URL_API, modelForm);
  }

  getCities(): Observable<string[]> {
    return of([
      'Cartagena',
      'Barranquilla',
      'Santa Marta',
      'Sincelejo',
      'Bogotá',
    ]).pipe(delay(2000));
  }
}
