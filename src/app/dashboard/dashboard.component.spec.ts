import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../services/hero.service';
import { from } from 'rxjs';
import { DebugElement } from '@angular/core';

const heroes = [{name:'uno', id:1},{name:'dos',id:2},];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockService: HeroService;
  let componentHtmlElement: HTMLElement;
  let componentDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [HeroService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    componentDebugElement = fixture.debugElement;
    componentHtmlElement = componentDebugElement.nativeElement;

    mockService = TestBed.inject(HeroService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heroes propertie', () => {
    expect(component.heroes).toBeTruthy();
  });

  it('should have called heroes service to get heroes', () => {
    spyOn(mockService, 'getHeroes').and.callFake(() => {
      return from([heroes]);
    })
    component.ngOnInit();

    expect(component.heroes.length).toBeGreaterThan(0);
  })

  it('should have a h2 tag', () => {
    expect(componentHtmlElement.querySelector('h2')).toBeTruthy();
  })

  it('should have a div with heroes-menu class', () => {
    expect(componentHtmlElement.querySelector('div.heroes-menu')).toBeTruthy();
  } )

  it('should create two a tags', () => {
    component.heroes = heroes;
    fixture.detectChanges();
    expect(componentHtmlElement.querySelectorAll('a').length).toBe(2);
  })
});
