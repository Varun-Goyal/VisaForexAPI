import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, RequestOptions, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  products: any = {};
  productIds: any[];

  constructor(
    public http: Http
  ) {
    this.products = WALMARTPRODUCT;
   }

  getProducts() {
    return this.products;
  }

  getProductsFromApi(): Observable<Product[]> {

    return this.http.get(`${environment.product_api_url}`)
      .map(res => res.json());

  }

}

// Fake Product List
const PRODUCTS: Product[] = [
  {
    name: 'PlayStation 4',
    brandName: 'Sony',
    largeImage: 'https://www.rentacenter.com/medias/100023010-500.jpg?context=bWFzdGVyfGltYWdlc3wxMTE2MHxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2gzOC9oNmEvODk0OTYxNDU3NTY0Ni8xMDAwMjMwMTBfNTAwLmpwZ3wzZWYxYzA3NTk4NmYzYTlhMThhMjM3OTQyMDBlN2VlYjg0MmQzN2JlMTNkZWM3OTA4Njk0NWI0YTBmOTlkMmY3',
    shortDescription: 'PlayStation 4 Pro. The super-charged PS4: faster, more powerful and with 4K gaming*.',
    currency: '840',
    salePrice: 499,
    targetCurrency: '',
    convertedPrice: ''
  },
  {
    name: 'Surface Pro',
    brandName: 'Microsoft',
    largeImage: 'https://images-na.ssl-images-amazon.com/images/I/41D6QBf8ABL._SY300_.jpg',
    shortDescription: 'Featuring a 6th Gen Intel Core i5 processor with 8GB memory and a 256GB solid state drive.',
    currency: '124',
    salePrice: 899,
    targetCurrency: '',
    convertedPrice: ''
  },
  {
    name: 'iPhone X',
    brandName: 'Apple',
    largeImage: 'https://images.samsclubresources.com/is/image/samsclub/0040980078712_A?$img_size_380x380$',
    shortDescription: 'The iPhone X with all new chip has four efficiency cores that are up to 70% faster than A10 Fusion.',
    currency: '978',
    salePrice: 999,
    targetCurrency: '',
    convertedPrice: ''
  }
];


// Walmart Product
const WALMARTPRODUCT = {
  	brandName: "Intex",
  	largeImage: "https://i5.walmartimages.com/asr/c840b3e4-bae6-42fd-a81d-57599313dafa_1.7ad2bf96ae235bb469ed89564a9faab2.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  	longDescription: "&lt;br&gt;&lt;b&gt;Intex Krystal Clear Saltwater Pool Filter:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;Pool filter produces a level of swimmer-safe chlorine when non-iodized pool salt is added&lt;/li&gt;&lt;li&gt;Intex saltware system pool filter requires a flow rate of 700-4,000 GPH&lt;/li&gt;&lt;li&gt;Pump sold separately&lt;/li&gt;&lt;/ul&gt;This pool filter is specifically designed for use with above-ground pools. It can destroy bacteria, oxidize bather organics, and control algae in order to make your swimming pool safe, clean and comfortable.",
  	mediumImage: "https://i5.walmartimages.com/asr/c840b3e4-bae6-42fd-a81d-57599313dafa_1.7ad2bf96ae235bb469ed89564a9faab2.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
  	msrp: 299.99,
  	name: "Intex Krystal Clear Saltwater System 15,000 Gallon",
  	salePrice: 186.99,
  	shortDescription: "You can enjoy a clean and comfortable pool using the Intex Krystal Clear saltwater pool filtration system. This easy to maintain saltwater filter is compact and efficient in generating clear pool water. The Intex filter replaces hazardous chlorine with inexpensive, natural salts as it cleans.",
  	thumbnailImage: "https://i5.walmartimages.com/asr/c840b3e4-bae6-42fd-a81d-57599313dafa_1.7ad2bf96ae235bb469ed89564a9faab2.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
  	upc: "078257317042"
};
