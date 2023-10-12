import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  public games$?: Observable<Game[]>;

  constructor(private http: HttpClient) { }

  public getNominated() {
    if (!this.games$) {
      this.games$ = this.http.get<Game[]>(`${environment.url}/api/goty`);
    }
    return this.games$;
  }
}
