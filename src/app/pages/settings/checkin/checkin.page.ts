import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagingConfig } from '../../../lib/interfaces/paging-config.interface';
import { Checkin } from './../../../lib/interfaces/checkin.interface';
import { CheckinService } from './../../../lib/services/checkin/checkin.service';

@Component({
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, Ng2SearchPipeModule],
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.css'],
})
export class CheckinPage implements OnInit {
  filterTerm!: string;
  checkinList: Checkin[] = [];
  page = 1;
  limit = 3;
  total = 0;
  totalPages = 0;
  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor(private _checkinService: CheckinService, private _router: Router) {}
  ngOnInit() {
    this.loadCheckins();
  }
  loadCheckins() {
    return this._checkinService.getCheckin({ Page: this.page, Limit: this.limit }).subscribe((data: any) => {
      this.checkinList = data.list;
      this.total = data.paging.total;
      this.totalPages = data.paging.totalPages;
      this.limit = data.paging.limit;
    });
  }
  pageChangeEvent(event: number) {
    this.page = event;
    this.loadCheckins();
  }
}
