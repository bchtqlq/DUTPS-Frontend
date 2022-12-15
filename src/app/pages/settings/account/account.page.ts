import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PagingConfig, User } from '@lib/interfaces';
import { AccountService } from '@lib/services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, Ng2SearchPipeModule],
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.css'],
})
export class AccountPage {
  filterTerm!: string;
  userList: User[] = [];
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes: any = [3, 6, 9, 12];
  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor(private _accountService: AccountService, private _router: Router) {}
  ngOnInit() {
    this.loadHistories();
  }
  loadHistories() {
    return this._accountService.getUsers().subscribe((data: any) => {
      this.userList = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.loadHistories();
  }
  pageChangeEvent(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.loadHistories();
  }
}
