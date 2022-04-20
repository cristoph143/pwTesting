import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should click `Use Letters` and useLetters should be true', () => {
    expect(component.useLetters).toBeFalse();

    let input = fixture.debugElement.query(
      By.css('#withLetters')
    ).nativeElement;

    input.click();
    fixture.detectChanges();

    expect(component.useLetters).toBeTrue();
  });
});
