import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CryptolistService} from './cryptolist.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CyptocurrencyListViewComponent } from './cyptocurrency-list-view/cyptocurrency-list-view.component';
import { PriceviewComponent } from './priceview/priceview.component';
import { ComparisonviewComponent } from './comparisonview/comparisonview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

//Toastr service 
import { ToastrModule } from 'ngx-toastr';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Angular material modules
import { MatSortModule, MatTableModule,MatPaginatorModule,MatSliderModule,MatIconModule,MatFormFieldModule,MatFormFieldControl,MatInputModule,MatButtonModule,MatCheckboxModule} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    CyptocurrencyListViewComponent,
    PriceviewComponent,
    ComparisonviewComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule, //HttpClient Module Added
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ToastrModule.forRoot(),// ToastrModule added
    
 
    //Routing
    RouterModule.forRoot([
      {path: 'cryptocurrencylistview', component:CyptocurrencyListViewComponent},
      {path:'',redirectTo: 'cryptocurrencylistview',pathMatch:'full'},
      {path:'priceview/:id',component:PriceviewComponent},
      {path:'comparisonview', component:ComparisonviewComponent},
      {path: '**',component:NotfoundComponent}
    ])
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  

  ],
  
  providers: [CryptolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
