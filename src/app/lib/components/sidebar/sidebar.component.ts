import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  constructor(private _router: Router) {}

  redicrectHome() {
    this._router.navigateByUrl('/home');
  }
  redirectCheckin() {
    this._router.navigateByUrl('/settings/checkin');
  }
  redirectHistory() {
    this._router.navigateByUrl('/settings/history');
  }
}
