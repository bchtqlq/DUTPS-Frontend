import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@lib/services';
import { LoadingService } from '../../../lib/services/loading/loading.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  private _callbackURL: string;
  loading$ = this.loader.loading$;
  loginFailed = '';
  checkPolicy = false;
  @ViewChild('username', { static: true }) usernameElement: ElementRef;
  @ViewChild('password', { static: true }) passwordElement: ElementRef;
  @ViewChild('failedDiv') failedDiv: ElementRef;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    usernameElement: ElementRef,
    passwordElement: ElementRef,
    failedDiv: ElementRef,
    public loader: LoadingService,
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
    this.usernameElement = usernameElement;
    this.passwordElement = passwordElement;
    this.failedDiv = failedDiv;
  }

  onClickSignIn(): void {
    this.failedDiv.nativeElement.classList.add('invisible');
    this.loginFailed = '';
    this.checkPolicy = true;
    this._authService
      .login(this.usernameElement.nativeElement.value, this.passwordElement.nativeElement.value)
      .subscribe(
        (response) => {
          this._router.navigate([this._callbackURL]);
        },
        (error) => {
          this.failedDiv.nativeElement.classList.remove('invisible');
          this.loginFailed = 'Login Failed';
          this.checkPolicy = false;
        },
      );
  }
}
