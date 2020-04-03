export interface cryptoCurrency {
  data: any;
  getJSONObject(arg0: string);

    name : string;
    market_cap:number;
    price:number;
    quote:{
        USD:{
            price : number,
            market_cap : number
        }
    }
    }
