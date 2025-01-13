import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css', 
  standalone: false
})
export class NewItemComponent {
  itemName: string = '';

  mapperItem: Item | null = null;

  constructor(private itemService: ItemService, private router: Router) {}

  onSubmit() {
    var mapperItem = {
      id: 0,
      name: this.itemName
    }

    this.itemService.addItem(mapperItem).subscribe(
      () => {
        this.router.navigate(['/items'])
      },
      // (error) => {
        
    //}
  );
  }
}
