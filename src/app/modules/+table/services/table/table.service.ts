import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API} from '../../../../core/common/tokens/api.token';
import {Cow} from '../../../../shared/models/cow.interface';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private readonly http: HttpClient,
              @Inject(API) private readonly api: string) {
  }

  public getData(): Observable<Cow[]> {
    return this.http.get<Cow[]>(this.api + 'cows');
  }

  public delete(cowId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + 'cows' + `/${cowId}`);
  }

  public patchCow(cow: Cow): Observable<Cow> {
    return this.http.patch<Cow>(this.api + 'cows' + `/${cow.cowId}`, cow);
  }

  public addCow(cow: Cow): Observable<Cow> {
    return this.http.post<Cow>(this.api + 'cows', cow);
  }
}
