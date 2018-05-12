import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

import { CurrencyService } from '../services/currency.service';

import { Currency } from '../models/currency.model';


/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-component',
  styleUrls: ['tables.component.css'],
  templateUrl: 'tables.component.html',
})
export class TablesComponent implements OnInit {
  currency: Currency[];
  convertedAmount: string;

  displayedColumns = ['position', 'item', 'price', 'sourceCurrency', 'targetCurrency', 'convertedAmount'];
  dataSource = new ExampleDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort) sort: MatSort;

  update(el: Element, price: number) {
    if (price == null) { return; }
    // copy and mutate
    const copy = this.dataSource.data().slice()
    el.price = price;
    this.dataSource.update(copy);
  }

  constructor(
    public currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.currency = this.currencyService.getCurrencyList();
    // this.convertedAmount = this.currencyService.getConvertedAmout('USD', 'USD', 500);
    // console.log(this.convertedAmount);
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
}

export interface Element {
  item: string;
  position: number;
  price?: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, item: 'playStation', price: 500},
  {position: 2, item: 'iPhone 8', price: 850},
  {position: 3, item: 'iPhone X', price: 999}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {

  private dataSubject = new BehaviorSubject<Element[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data) {
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return this.dataSubject;
  }

  disconnect() {}
}
