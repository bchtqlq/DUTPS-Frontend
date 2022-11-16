import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage {
  private _callbackURL: string;
  errorInput = '';
  @ViewChild('username', { static: true }) usernameElement: ElementRef;
  @ViewChild('password', { static: true }) passwordElement: ElementRef;
  @ViewChild('confirmPassword', { static: true }) confirmPasswordElement: ElementRef;
  @ViewChild('email', { static: true }) emailElement: ElementRef;
  @ViewChild('invalidData') invalidElement: ElementRef;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    usernameElement: ElementRef,
    emailElement: ElementRef,
    passwordElement: ElementRef,
    confirmPasswordElement: ElementRef,
    invalidElement: ElementRef

  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
    this.usernameElement = usernameElement;
    this.passwordElement = passwordElement;
    this.emailElement = emailElement;
    this.confirmPasswordElement = confirmPasswordElement;
    this.invalidElement = invalidElement;
  }
  onClickRegister(): void {
    this.errorInput = '';
    this.invalidElement.nativeElement.classList.add('invisible');
    this._authService
      .register(this.usernameElement.nativeElement.value,this.emailElement.nativeElement.value ,this.passwordElement.nativeElement.value, this.confirmPasswordElement.nativeElement.value)
      .subscribe(
        (response) => {
          this._router.navigate([this._callbackURL]);
        },
        (error) => {
          this.invalidElement.nativeElement.classList.remove('invisible');
          this.errorInput = 'Invalid data. Please try again!';
          console.log("error")
        },
      );
  }
}
