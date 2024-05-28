import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {name: 'Peo', id: 1}
}
