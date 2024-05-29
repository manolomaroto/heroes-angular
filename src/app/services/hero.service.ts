import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

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
}
