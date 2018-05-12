import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { LocationService } from '../shared';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  merchant = {
    merchantName: '',
    zipCode: ''
  };
  visaMerchantName: string;
  merchantCity: string;
  neighborhoods: Array<any>;
  markers: Array<any> = [];
  map: any;
  mapCenter: {lat, lng};
  markerInfo: string;

  @ViewChild("map")
  public mapElementRef: ElementRef;

  constructor(
    private locationServie: LocationService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.neighborhoods = [
      {lat: 40.711610, lng: -73.947242}
      // {lat: 40.749610, lng: -73.922242},
      // {lat: 40.697610, lng: -73.896242},
      // {lat: 40.717610, lng: -73.978242}
    ];
    this.markerInfo = 'this is info window';
    this.mapCenter = {lat: 40.730610, lng: -73.935242};
    this.mapsAPILoader.load().then(() => {
      this.map = new google.maps.Map(this.mapElementRef.nativeElement, {
        zoom: 12,
        center: this.mapCenter
      });
    });
  }


  // Drop Markers
  drop() {
    this.clearMarkers();
    for (var i = 0; i < this.neighborhoods.length; i++) {
      this.addMarkerWithTimeout(
        this.neighborhoods[i], i * 200);
    }
  }

  clearMarkers() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  addMarkerWithTimeout(position, timeout) {
    setTimeout(() => {
      let infowindow = new google.maps.InfoWindow({
        content: this.markerInfo
      });
      let marker = new google.maps.Marker({
        position: position,
        map: this.map,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function (marker) {
          return function () {
              console.log("marker clicked...");
              infowindow.open(this.map, marker);
          }
      })(marker));
    }, timeout);
  }


  // Search Merchant
  searchMerchant(merchant) {
    console.log(merchant);

    this.locationServie.getMerchantLocationFromApi(merchant.merchantName, merchant.zipCode).subscribe(data => {

      console.log(data);
      console.log((data as any).merchantLocatorServiceResponse.response[0].responseValues);

      this.neighborhoods[0].lat = +(data as any).merchantLocatorServiceResponse.response[0].responseValues.locationAddressLatitude;
      this.neighborhoods[0].lng = +(data as any).merchantLocatorServiceResponse.response[0].responseValues.locationAddressLongitude;
      
      this.visaMerchantName = (data as any).merchantLocatorServiceResponse.response[0].responseValues.visaMerchantName;
      this.merchantCity = (data as any).merchantLocatorServiceResponse.response[0].responseValues.merchantCity;
      this.markerInfo = this.visaMerchantName + ", " + this.merchantCity;

      this.mapCenter.lat = this.neighborhoods[0].lat;
      this.mapCenter.lng = this.neighborhoods[0].lng;

      this.map.panTo(this.mapCenter);
      console.log(this.markerInfo);
      this.drop();
      
    })
  }

}
