import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { DebugElement } from '@angular/core';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let myComponentHtmlElement: HTMLElement;
  let myComponentDebugElement: DebugElement;
  let mockService: HeroService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [HttpClientModule, MatGridListModule, RouterModule, RouterTestingModule],
      providers: [HeroService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    myComponentDebugElement = fixture.debugElement;
    myComponentHtmlElement = myComponentDebugElement.nativeElement;
    mockService = TestBed.inject(HeroService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a heroes property', () => {
    expect(component.heroes).toBeTruthy();
  })

  it('should have an H2', () => {
    expect(myComponentHtmlElement.querySelector('h2')?.textContent).toContain('My Heroes');
  })

  it('should have called service', () => {
    spyOn(mockService, 'getHeroes').and.callFake(() => {
      return from([[{name: 'Luis', id: 3}]]);
    })
    component.ngOnInit();
    expect(component.heroes.length).toBeGreaterThan(0);
  })
});
