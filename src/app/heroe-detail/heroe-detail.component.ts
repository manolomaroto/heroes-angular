import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrl: './heroe-detail.component.css'
})
export class HeroeDetailComponent {
  @Input() hero?: Hero
}
