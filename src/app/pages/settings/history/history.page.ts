import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { History } from '../../../lib/interfaces';
import { PagingConfig } from '../../../lib/interfaces/paging-config.interface';
import { HistoryService } from '../../../lib/services';

@Component({
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, Ng2SearchPipeModule],
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.css'],
})
export class HistoryPage implements OnInit {
  filterTerm!: string;
  historyList: History[] = [];
  page = 1;
  limit = 3;

  total = 0;
  totalPages = 0;
  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor(private _historyService: HistoryService, private _router: Router) {}
  ngOnInit() {
    this.loadHistories();
  }
  loadHistories() {
    return this._historyService.getHistory({ Page: this.page, Limit: this.limit }).subscribe((data: any) => {
      this.historyList = data.list;
      this.total = data.paging.total;
      this.totalPages = data.paging.totalPages;
      this.limit = data.paging.limit;
    });
  }
  pageChangeEvent(event: number) {
    this.page = event;
    this.loadHistories();
  }
}
