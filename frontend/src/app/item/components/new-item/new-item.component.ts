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

  message: string = '';  // error message

  constructor(private itemService: ItemService, private router: Router) {}

  onSubmit() {
    if (!this.itemName) {
      return;  // avoid submitting if the name is empty
    }

    var mapperItem = {
      id: 0,
      name: this.itemName
    }

    this.itemService.addItem(mapperItem).subscribe(
      {
        next: () => {
          this.router.navigate(['/items'])
        },
        error: (error) => {
          console.error('Error adding item', error);
          this.message = 'Error adding item. Item with the same name already exists.';  // error message
        },
      }
  );
  }
}
