import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';
import { ShopperComponent } from './shopper/shopper.component';
import { ItemComponent } from './item/item.component';
import { NewItemComponent } from './item/components/new-item/new-item.component';
import { EditItemComponent } from './item/components/edit-item/edit-item.component';
import { EditShopperComponent } from './shopper/components/edit-shopper/edit-shopper.component';
import { NewShopperComponent } from './shopper/components/new-shopper/new-shopper.component';

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
  },
  {
    path: 'items/edit/:id',
    component: EditItemComponent
  },
  {
    path: 'shoppers/new',
    component: NewShopperComponent
  },
  {
    path: 'shoppers/edit/:id',
    component: EditShopperComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
