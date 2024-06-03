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
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'heroes-angular'`, () => {
    expect(component.title).toEqual('heroes-angular');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(myComponentHtmlElement.querySelector('h1')?.textContent).toContain('heroes-angular');
  });
});
