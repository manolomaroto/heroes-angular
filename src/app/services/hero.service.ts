import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from '../interfaces/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://akabab.github.io/superhero-api/api/all.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<any> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of({name: 'Pacp', id: 3})
  }
}
