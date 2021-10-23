import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CoinsInterface {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24: number;
  total_volume: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  coins: CoinsInterface[] = [];


  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.http.get<CoinsInterface[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe(
    (response) => {
      console.log(response)
      this.coins = response
    },
    (error) => console.log(error)
    );


}
}
