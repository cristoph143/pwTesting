import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent - Bohol, Cristopher B.', () => {
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

  it('should return the parsed length', () => {
    expect(component.pwLength).toBe(0);

    let input = fixture.debugElement.query(
      By.css('#pwLenght')
    ).nativeElement;

    input.value = 10;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.pwLength).toBe(10);
  });

  describe('when clicking the checkbox', () => {
    it('should call `onChangeUseLetters`', () => {
      spyOn(component, 'onChangeUseLetters');
    });

    it('should call `onChangeUseNumbers`', () => {
      spyOn(component, 'onChangeUseNumbers');
    });

    
    it('should call `onChangeUseSymbols`', () => {
      spyOn(component, 'onChangeUseSymbols');
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
  
    it('should click `Use Symbols` and useSymbols should be true', () => {
      expect(component.useSymbols).toBeFalse();
  
      let input = fixture.debugElement.query(
        By.css('#withSymbols')
      ).nativeElement;
  
      input.click();
      fixture.detectChanges();
  
      expect(component.useSymbols).toBeTrue();
    });
  
    it('should click `Use Numbers` and useNumbers should be true', () => {
      expect(component.useNumbers).toBeFalse();
  
      let input = fixture.debugElement.query(
        By.css('#withNumbers')
      ).nativeElement;
  
      input.click();
      fixture.detectChanges();
  
      expect(component.useNumbers).toBeTrue();
    });
  });

  describe('when clicking the button', () => {
    it('should call `onButtonClick`', () => {
      spyOn(component, 'onButtonClick');
    });

    it('should return the generated password', () => {
      expect(component.password).toBe('');
      
      component.onButtonClick();
  
      expect(component.password).not.toBeNull;
    }); 
  });

  // describe('display the result', () => {
  //   it('should display the result', () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain(
  //       ''
  //     );
  //   });
  // });

});
