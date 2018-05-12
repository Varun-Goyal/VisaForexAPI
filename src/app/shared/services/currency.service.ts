import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, RequestOptions, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Currency, Product } from '../models';


@Injectable()
export class CurrencyService {
  currencyList: Currency[];
  destinationAmount: string;
  currencyObject: {
    sourceCurrencyCode: string;
    sourceAmount: string;
    destinationCurrencyCode: string;
  }

  constructor(
    public http: Http
  ) {
    console.log('Currency Service Connected...');
    this.currencyList = currencyList;
  }

  getCurrencyList() {
    return this.currencyList;
  }

  getConvertedAmoutFromApi(sourceCurrency, sourceAmount, targetCurrency): Observable<any[]> {

    this.currencyObject = {
      sourceCurrencyCode: sourceCurrency,
      sourceAmount: sourceAmount,
      destinationCurrencyCode: targetCurrency
    }
    console.log('Sending to service....' + this.currencyObject);

    return this.http.post(`${environment.currency_api_url}`, this.currencyObject)
      .map(res => res.json());

  }

}

// Currency List
const currencyList: Currency[] = [
  {value: '840', viewValue: 'USD'},
  {value: '124', viewValue: 'CAD'},
  {value: '978', viewValue: 'EUR'},
  {value: '826', viewValue: 'GBP'}
];
