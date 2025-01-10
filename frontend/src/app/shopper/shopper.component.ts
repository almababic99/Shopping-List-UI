import { Component, OnInit } from '@angular/core';
import { Shopper } from './models/shopper.model';
import { ShopperService } from './services/shopper.service';

@Component({
  selector: 'app-shopper',
  templateUrl: './shopper.component.html',
  styleUrl: './shopper.component.css',
  standalone: false,
})
export class ShopperComponent implements OnInit {
  shoppers: Shopper[] = []; // This array will store the list of shoppers fetched from the API.

  constructor(private shopperService: ShopperService) {} // The shopperService is injected into the component

  ngOnInit() {
    this.getShoppers();  // calling the method below
  }

  getShoppers() {
    this.shopperService.getShoppers().subscribe(  // The component subscribes to this observable to receive the shopper data. The subscription will trigger an HTTP request to fetch the list of shoppers from the API.
      {
        next: (data) => {
          this.shoppers = data; // Storing fetched shoppers; The data (which is an array of shoppers) is assigned to the shoppers property of the component.
          console.log(data);
        },
        error: (error) => {
          console.error('Error fetching shoppers', error);
        },
      } 
    );
  }
}
