import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password Generator';
  password = '';
  name = 'Jesury';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  pwLength = 0;
  test = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.pwLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    console.log(this.useLetters);
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    console.log(this.useSymbols);
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    console.log(this.useNumbers);
  }

  getLength(event: string) {
    const parsedLength = parseInt(event);

    if (!isNaN(parsedLength)) {
      this.pwLength = parsedLength;
    }
  }
}
