import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://akabab.github.io/superhero-api/api/all.json';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<any> {
    return this.http.get(this.heroesUrl);
  }
}
