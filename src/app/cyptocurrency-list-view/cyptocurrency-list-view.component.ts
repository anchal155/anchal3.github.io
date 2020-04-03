import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { CryptolistService} from '../cryptolist.service';

import {ToastrService} from 'ngx-toastr';

import {cryptoCurrency} from '../currencyinfo'; 

import {MatSort} from '@angular/material';

import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator,MatSliderModule,MatIconModule,MatInputModule,MatLabel,MatFormFieldControl} from '@angular/material'; //required material module added

import {Router, ActivatedRoute} from '@angular/router'; 

import {FormsModule, ReactiveFormsModule,FormControl,Validators} from '@angular/forms';

import {SelectionModel} from '@angular/cdk/collections'; //Selection Model Added






@Component({
  selector: 'app-cyptocurrency-list-view',
  templateUrl: './cyptocurrency-list-view.component.html',
  styleUrls: ['./cyptocurrency-list-view.component.css']

})
  
export class CyptocurrencyListViewComponent implements OnInit {


 

displayedColumns=['select','name','price','market_cap'];
   
 allCryptoCurrencies;

searchKey:any;

 @ViewChild(MatSort) sort: MatSort; 
 @ViewChild(MatPaginator) paginator:MatPaginator;

currencies:any

selection = new SelectionModel<any>(true, []);


 constructor(private service:CryptolistService,private toastr:ToastrService, private _route:ActivatedRoute, private router:Router) {

  
     
 } //End constructor

  




  
//Method to navigate to show comparison
  goToOther() {
     
    //routing through query parameter
     this.router.navigate(['/comparisonview'], {relativeTo: this._route, queryParams: { id:this.selection.selected[0].id,id1:this.selection.selected[1].id} });
      let selectedIds = this.selection.selected
     console.log(selectedIds)

    this.service.Id = selectedIds
   console.log(this.service.Id) 

  }

//CheckBox method
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.currencies.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.currencies.data.forEach(row => this.selection.select(row));
       

  }

  

  


 ngOnInit() {
    console.log("ngoninit view is initialized");

    

  
//Load currency information 
 this.service.getAllCryptoCurrency().subscribe(

      data => {
        console.log(data)
        this.allCryptoCurrencies = data["data"];
        console.log(this.allCryptoCurrencies);

     
        this.service.currencyData = new MatTableDataSource(this.allCryptoCurrencies)

        this.currencies=this.service.currencyData; 

          console.log(this.currencies) 
      
        this.currencies.sort = this.sort;
          console.log(this.sort) //Sorted Data

        //Implemented pagination 
          this.currencies.paginator = this.paginator;
          console.log(this.paginator) 

      

        }, 

 error => {
        console.log("some error occured")
        console.log(error.errorMessage)

        this.toastr.error("OOPS !! Some error occured")
      }
    
    ) 

     
    
  }

  


 
}
  

  
