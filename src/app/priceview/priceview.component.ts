import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

import {CryptolistService} from '../cryptolist.service';  //service file added

import {ToastrService} from 'ngx-toastr'; //toaster service added



@Component({
  selector: 'app-priceview',
  templateUrl: './priceview.component.html',
  styleUrls: ['./priceview.component.css']
})
export class PriceviewComponent implements OnInit {

selectedRow:any;

currency:any;





  constructor(private router:Router,private _route:ActivatedRoute,private service:CryptolistService,private http :HttpClient,private toastr:ToastrService) { }

  ngOnInit() {

    let ID = this._route.snapshot.params["id"]
    console.log(ID);

    //Load coin details 
    this.service.getPriceDetails(ID).subscribe(

      data => {
        console.log(data);
        this.service.dataRow=data["data"]
        console.log(this.service.dataRow)
        this.selectedRow=this.service.dataRow
        console.log(this.selectedRow)

        //Loop for selected coins
          for(let key in this.selectedRow) {
             this.currency = this.selectedRow[key]
             console.log(this.currency)
          }
            
      }
    ) 

  //Handling error

 error => {
        console.log("some error occured")
        console.log(error.errorMessage)

        this.toastr.error("OOPS !! Some error occured")
      }

    } 
  
    

    
   
    

}
