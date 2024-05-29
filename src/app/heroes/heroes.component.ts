import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mocks/mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: selected hero id ${hero.id}`);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0,50);
      })
  }

  ngOnInit() {
    this.getHeroes();
  }
}
