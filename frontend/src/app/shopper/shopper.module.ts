import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopperComponent } from './shopper.component';
import { NewShopperComponent } from './components/new-shopper/new-shopper.component';
import { EditShopperComponent } from './components/edit-shopper/edit-shopper.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ShopperComponent, NewShopperComponent, EditShopperComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class ShopperModule { }
