import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let myComponentHtmlElement: HTMLElement;
  let myComponentDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SpinnerComponent,
        MessagesComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    myComponentDebugElement = fixture.debugElement;
    myComponentHtmlElement = myComponentDebugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'heroes-angular'`, () => {
    expect(component.title).toEqual('heroes-angular');
  });

  it('should render title', () => {
    expect(myComponentHtmlElement.querySelector('h1')?.textContent).toContain('heroes-angular');
  });

  it('should have a app-spinner component', () => {
    expect(myComponentHtmlElement.querySelector('app-spinner')).toBeTruthy();
  })

  it('should have div with topNav class', () => {
    expect(myComponentHtmlElement.querySelector('nav.topnav')).toBeTruthy();
  });

  it('should have two a tags with routerLink attribute', () => {
    expect(myComponentHtmlElement.querySelectorAll('a[routerLink]').length).toEqual(2);
  })

  it('should have a router-outlet tag', () => {
    expect(myComponentHtmlElement.querySelector('router-outlet')).toBeTruthy();
  })

  it('should have a app-messages tag', () => {
    expect(myComponentHtmlElement.querySelector('app-messages')).toBeTruthy();
  })
});
