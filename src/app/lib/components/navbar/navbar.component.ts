import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { REPOSITORY_URL } from '@lib/constants/constants';
import { AuthService } from '@lib/services';
import { storage } from '@lib/utils/storage/storage.utils';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  username = storage.getItem('App/session')?.user;
  readonly repositoryURL = REPOSITORY_URL;

  constructor(private _router: Router, private _authService: AuthService) {}

  onClickSignOut(): void {
    this._authService.logout();
    this._router.navigateByUrl('/auth/login');
  }
}
