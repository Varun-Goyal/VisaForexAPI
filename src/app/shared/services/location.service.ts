import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, RequestOptions, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LocationService {
  merchantObject: {
    merchantName: string;
    merchantPostalCode: string;
  }

  constructor(
    public http: Http
  ) {
    console.log('Location Service Connected...');
  }

  getMerchantLocationFromApi(merchantName, zipCode): Observable<any[]> {

    this.merchantObject = {
      merchantName: merchantName,
      merchantPostalCode: zipCode,
    }
    console.log('Sending to location service....' + this.merchantObject);
    
    return this.http.post(`${environment.currency_api_url + '/merchantLocator'}`, this.merchantObject)
      .map(res => res.json());

  }

}
