import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent, NavbarComponent } from '@lib/components';
import { SideBarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-layout-horizontal',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SideBarComponent],
  templateUrl: './layout-horizontal.component.html',
  styleUrls: ['./layout-horizontal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHorizontalComponent {}
