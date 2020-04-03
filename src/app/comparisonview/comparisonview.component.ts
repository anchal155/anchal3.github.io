import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

import {CryptolistService} from '../cryptolist.service';

import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-comparisonview',
  templateUrl: './comparisonview.component.html',
  styleUrls: ['./comparisonview.component.css']
})
export class ComparisonviewComponent implements OnInit {



  selectedRows:any;



  constructor(private service:CryptolistService,private http :HttpClient,private toastr:ToastrService) { }

  ngOnInit() {

  this.selectedRows = this.service.Id

  console.log(this.selectedRows);

  




}

}
