import { Component, OnInit } from '@angular/core';
import { Shopper } from '../../models/shopper.model';
import { ShopperService } from '../../services/shopper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.css',
  standalone: false
})
export class ShoppingListsComponent implements OnInit {
  shopper: Shopper = {   // shopper object
    id: 0,
    name: ''
  };

  constructor(private shopperService: ShopperService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');  // getting id from url
      if (idParam) {
        this.shopperService.getShopperById(+idParam).subscribe({   // + converts string to number
          next: (shopper) => this.shopper = shopper  // using getShopperById we get the shopper object from backend with its id and assign it to component's shopper object (before it is edited)
        })
      } 
      else {
        console.error('An error occured.');
      }
    });
  }
}
