import { Component } from '@angular/core';

import { CryptolistService} from './cryptolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptocurrency-list';
  searchKey:any;

  constructor(private service:CryptolistService) { 
    console.log("list constructor is called")

     
  }
 


    applyFilter() {

      this.searchKey = (event.target as HTMLInputElement).value

      this.service.currencyData.filter = this.searchKey.trim().toLowerCase();

      console.log(this.searchKey)
    }
}

