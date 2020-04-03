import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http'; 
import { Observable } from "rxjs"; //Observable

import {Router, ActivatedRoute, RouterModule,Params} from '@angular/router' //Routing

import {map,catchError, tap} from 'rxjs/Operators'; //Rxjs library 

import {cryptoCurrency} from './currencyinfo'; //Interface

import {MatTableDataSource} from '@angular/material/table'; //Angular material Data table 


@Injectable({
  providedIn: 'root'
})
export class CryptolistService {

  public allCryptoCurrencies:cryptoCurrency;

  public dataRow:any;

  public baseUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/';

  public apikey='07d2d991-4568-4c89-a9bc-9443ad966700';

  public currencyData:MatTableDataSource<any>;


Id:any=[];



  constructor(private _http:HttpClient, router:Router, route:ActivatedRoute) { 
    console.log('service constructor is called')
  } //end constructor





     //Handle error
     private handleError(err:HttpErrorResponse) {
      console.log("Handle error http calls")
      console.log(err.message);
      return Observable.throw(err.message)
    }

    public getAllCryptoCurrency():any{
     return this._http.get('https://cors-anywhere.herokuapp.com/'+ this.baseUrl + 'listings' + '/latest?CMC_PRO_API_KEY=' +this.apikey + '&limit=500')
      
    } //end get all currencies method

    public getPriceDetails(currentId):any {

      return this._http.get('https://cors-anywhere.herokuapp.com/' + this.baseUrl + 'quotes' + '/latest?id=' + currentId + '&CMC_PRO_API_KEY=' + this.apikey + '&aux=volume_24h_reported')

     
    } //end getPriceDetails method

   
}


