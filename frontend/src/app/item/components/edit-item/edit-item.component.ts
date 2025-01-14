import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css',
  standalone: false
})
export class EditItemComponent implements OnInit {
  itemName: string = '';   
  itemId: number = 0;

  item: Item = {
    id: 0,
    name: ''
  };

  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');  // getting id from url
      if (idParam) {
        //this.itemId = +idParam;  // + converts string to number

        this.itemService.getItemById(+idParam).subscribe({
          next: (item) => this.item = item
        })
      } 
      else {
        console.error('An error occured.');
      }
    });
  }

  onSubmit() {
    console.log("item: ", this.item)
    this.itemService.editItem(this.item).subscribe({
      next: () => {
        this.router.navigate(['/items'])   // navigating back to items after editing item
      },
      error: (error) => {
        console.error('Error editing item', error);
      },
    });
  }
}
