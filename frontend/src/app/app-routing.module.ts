import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { ShopperComponent } from './shopper/shopper.component';
import { ItemComponent } from './item/item.component';
import { NewItemComponent } from './item/components/new-item/new-item.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'shoppers',
    component: ShopperComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
  {
    path: 'items/new',
    component: NewItemComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
