import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDetailComponent } from './heroe-detail.component';
import { HeroService } from '../services/hero.service';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './activated-route.stub';
import  { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import {provideAnimations } from '@angular/platform-browser/animations';

import { of } from 'rxjs';


describe('HeroeDetailComponent', () => {
  let component: HeroeDetailComponent;
  let fixture: ComponentFixture<HeroeDetailComponent>;
  let activatedRouteStub: ActivatedRouteStub;
  let heroService: HeroService;
  let location: Location;

  beforeEach(async () => {
    activatedRouteStub = new ActivatedRouteStub();

    await TestBed.configureTestingModule({
      declarations: [HeroeDetailComponent],
      imports: [HttpClientModule, MatFormFieldModule, FormsModule,MatInputModule],
      providers: [ HeroService, 
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                provideAnimations(),
                Location
              ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroeDetailComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);
    location = TestBed.inject(Location);

    spyOn(heroService, 'getHero').and.returnValue(of({id:123, name: 'Juan'}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id from route and fetch data', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.hero?.id).toBe(123);
    expect(heroService.getHero).toHaveBeenCalledWith(123);
    expect(component.hero).toEqual({id:123, name: 'Juan'});
  })

  it('should call back location.back()', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  })
});
